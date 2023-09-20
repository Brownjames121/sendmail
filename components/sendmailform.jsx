"use client";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import * as XLSX from "xlsx";

export function SendmailForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        // to: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().required(),
        // type: yup.string().required("You need to select a notification type."),
      })
    ),
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [emailData, setEmailData] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState("fromexcel");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: "A" });

        // Assuming email addresses are in column A
        const emailAddresses = parsedData.map((row) => row.A).filter(Boolean);
        setEmailData(emailAddresses);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Emails sent successfully");
        // Handle success (e.g., show a success message)
        toast({
          title: "Success",
          duration: 2000,
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
          variant: "success",
        });
        reset();
      } else {
        console.error("Error sending emails");
        // Handle error (e.g., show an error message)
        toast({
          title: "Error",
          duration: 2000,
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Error sending emails</code>
            </pre>
          ),
          variant: "error",
        });
        reset();
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      // Handle error (e.g., show an error message)
      toast({
        title: "Error",
        duration: 2000,
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error}</code>
          </pre>
        ),
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }

    // setIsLoading(false);
  }

  // Function to handle radio option change
  // const handleOptionChange = (value) => {
  //   setSelectedOption(value);
  // };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            {/*  */}

            {/* <Controller
              name="type"
              control={control}
              defaultValue="manual"
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  className="grid-cols-2"
                >
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <Controller
                      name="type"
                      control={control}
                      render={({ field }) => (
                        <RadioGroupItem
                          value="manual"
                          checked={field.value === "manual"}
                          id="r1"
                          onChange={() => field.onChange("manual")}
                        />
                      )}
                    />
                    <label htmlFor="r1">Manual</label>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <Controller
                      name="type"
                      control={control}
                      render={({ field }) => (
                        <RadioGroupItem
                          value="fromexcel"
                          checked={field.value === "fromexcel"}
                          id="r2"
                          onChange={() => field.onChange("fromexcel")}
                        />
                      )}
                    />
                    <label htmlFor="r2">From Excel</label>
                  </div>
                </RadioGroup>
              )}
            /> */}
            {/*  */}
            {/* <RadioGroup defaultValue="manual" className="grid-cols-2">
              <div className="flex items-center space-x-2 px-3 py-2">
                <RadioGroupItem value="manual" id="r1" />
                <Label htmlFor="r1">Manual</Label>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2">
                <RadioGroupItem value="fromexcel" id="r2" />
                <Label htmlFor="r2">From Excel</Label>
              </div>
            </RadioGroup> */}
          </div>
          {selectedOption === "manual" ? (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="to">
                To
              </Label>

              <Input
                id="manualInput"
                placeholder="To"
                type="text"
                autoCapitalize="none"
                autoComplete="to"
                autoCorrect="off"
                disabled={isLoading}
                {...register("to")}
              />

              {errors?.to && (
                <p className="px-1 text-xs text-red-500">{errors.to.message}</p>
              )}
            </div>
          ) : (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="to">
                To
              </Label>

              <Input
                id="to"
                placeholder="To"
                type="file"
                autoCapitalize="none"
                autoComplete="to"
                autoCorrect="off"
                disabled={isLoading}
                onChange={handleFileChange}
                accept=".xlsx, .xls"
                //   {...register("to")}
              />
              {errors?.to && (
                <p className="px-1 text-xs text-red-500">{errors.to.message}</p>
              )}

              {emailData.length > 0 && (
                <Input
                  id="to"
                  name="to"
                  type="text"
                  value={emailData}
                  disabled={isLoading}
                  {...register("to")}
                  readOnly
                />
              )}

              {/* {emailData.length > 0 && (
                <div className="overflow-x-auto overflow-y-scroll h-[100px] rounded-md border">
                  <table className="min-w-full">
                    <tbody className="">
                      {emailData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className=" text-sm font-medium leading-none rounded-md  p-4 whitespace-no-wrap border-b ">
                              {item}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )} */}
            </div>
          )}

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="subject">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Subject"
              type="text"
              autoCapitalize="none"
              autoComplete="subject"
              autoCorrect="off"
              disabled={isLoading}
              {...register("subject")}
            />
            {errors?.subject && (
              <p className="px-1 text-xs text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here."
              type="message"
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              disabled={isLoading}
              {...register("message")}
            />
            {errors?.message && (
              <p className="px-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button disabled={isLoading}>
            {" "}
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
}
