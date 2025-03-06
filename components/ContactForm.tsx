import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import {
  Credenza,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";

interface ContactFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ isOpen, onOpenChange }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://8c902c69.sibforms.com/serve/MUIFAN5JDAj2PFuAeu5j9OBXVMHnLorQi2DQgkgvhB13HEju_DYSGm4BxqTZIsX1pXfHoG3YGtfl6uGW0uVsFAGSmXa4OTECpcF42lPHag5wPHV8JXocJ6htwied1ea3UdcWZPw8SxAOTObIYp7DMldgmvPrIRRGXTa-EEOdc5t9CIdoOjDE74BjC6sLgsCsdSAEx3lzriV-wYwD",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: window.location.origin,
          },
          mode: "cors",
        },
      );

      console.log("Response status:", response.status);
      const responseBody = await response.text();
      console.log("Response body:", responseBody);

      if (response.status === 200) {
        setIsSubmitted(true);
        return;
      }

      throw new Error(`Submission failed with status: ${response.status}`);
    } catch (error) {
      console.error("Error during form submission:", error);
      setError(
        "Unable to submit the form. Please try again later or contact support.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <Credenza
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) resetForm();
        onOpenChange(open);
      }}
    >
      <CredenzaContent className="sm:max-w-md">
        <CredenzaHeader>
          <CredenzaTitle>Newsletter</CredenzaTitle>
        </CredenzaHeader>
        <div className="w-full bg-accent/5 rounded-xl p-4">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-2">
              <h3 className="font-semibold">Thanks for signing up!</h3>
              <p className="text-sm">
                Please check your email to confirm your spot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="FIRSTNAME">First Name *</Label>
                  <Input required id="FIRSTNAME" name="FIRSTNAME" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="LASTNAME">Last Name *</Label>
                  <Input required id="LASTNAME" name="LASTNAME" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="EMAIL">Email *</Label>
                  <Input required type="email" id="EMAIL" name="EMAIL" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ROLE">Your Role</Label>
                  <Input
                    required
                    id="ROLE"
                    name="ROLE"
                    placeholder="E.g. Musician"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="LOCATION">Location</Label>
                  <Input
                    required
                    id="LOCATION"
                    name="LOCATION"
                    placeholder="E.g. London, UK"
                  />
                </div>

                <div className="flex space-x-2 items-center bg-primary-foreground/5 dark:bg-primary/5 p-4 rounded-xl cursor-pointer">
                  <Checkbox
                    variant="check"
                    required
                    id="OPT_IN"
                    name="OPT_IN"
                  />
                  <div className="grid gap-1.5 leading-none w-full">
                    <label
                      htmlFor="OPT_IN"
                      className="text-xs mx-4 text-pretty font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-foreground dark:text-primary"
                    >
                      I am happy to be contacted by the Auracles team and for my
                      data to be stored as per the{" "}
                      <span className="underline decoration-dotted cursor-pointer hover:opacity-80">
                        <PrivacyPolicy />
                      </span>
                      .
                    </label>
                  </div>
                </div>
              </div>

              <Button
                animated
                variant="gradient"
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </CredenzaContent>
    </Credenza>
  );
}
