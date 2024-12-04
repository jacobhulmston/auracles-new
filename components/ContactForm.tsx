import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch(
        "https://8c902c69.sibforms.com/serve/MUIFAN5JDAj2PFuAeu5j9OBXVMHnLorQi2DQgkgvhB13HEju_DYSGm4BxqTZIsX1pXfHoG3YGtfl6uGW0uVsFAGSmXa4OTECpcF42lPHag5wPHV8JXocJ6htwied1ea3UdcWZPw8SxAOTObIYp7DMldgmvPrIRRGXTa-EEOdc5t9CIdoOjDE74BjC6sLgsCsdSAEx3lzriV-wYwD",
        {
          method: "POST",
          body: formData,
        },
      );
      // Handle response if needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
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
            <Label htmlFor="ROLE">Your Role *</Label>
            <Input required id="ROLE" name="ROLE" placeholder="E.g. Musician" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="LOCATION">Location *</Label>
            <Input
              required
              id="LOCATION"
              name="LOCATION"
              placeholder="E.g. London, UK"
            />
          </div>

          <div className="flex space-x-2 items-center bg-primary/5 p-4 rounded-xl cursor-pointer">
            <Checkbox variant="check" required id="OPT_IN" name="OPT_IN" />
            <div className="grid gap-1.5 leading-none w-full">
              <label
                htmlFor="OPT_IN"
                className="text-xs mx-4 text-pretty font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
              >
                I am happy to be contacted by the Auracles team and for my data
                to be stored as per the Privacy Policy.
              </label>
            </div>
          </div>
        </div>

        <Button
          animated
          variant="gradient"
          type="submit"
          size="lg"
          className="gap-2"
        >
          <Send className="h-4 w-4" />
          Submit
        </Button>
      </form>
    </div>
  );
}
