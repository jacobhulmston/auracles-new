"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-40 bg-accent backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    style={{
      WebkitBackdropFilter: "blur(24px)",
      isolation: "isolate",
      backgroundColor: "rgba(255, 255, 255, 0.01)",
    }}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // Check if footer exists among children
  const hasFooter = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      typeof child.type !== "string" &&
      "displayName" in child.type &&
      (child.type.displayName === "DialogFooter" ||
        child.type.displayName === "CredenzaFooter"),
  );

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "outline-offset-0 outline outline-1 outline-background/80 fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-[20px]",
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            typeof child.type !== "string" &&
            "displayName" in child.type &&
            (child.type.displayName === "DialogHeader" ||
              child.type.displayName === "DialogFooter" ||
              child.type.displayName === "CredenzaHeader" ||
              child.type.displayName === "CredenzaFooter")
          ) {
            return child;
          }
          // Adjust padding based on footer presence
          return (
            <div
              className={`max-h-[calc(100svh-4rem)] no-scrollbar overflow-y-auto px-4 pt-[69px] ${
                hasFooter ? "pb-24" : "pb-4"
              }`}
            >
              {child}
            </div>
          );
        })}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLDivElement;
      setIsScrolled(target.scrollTop > 0);
    };

    const scrollContainer = document.querySelector(".no-scrollbar");
    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "gap-2 transition-all border-solid border-b items-center backdrop-blur-lg p-4 rounded-t-[20px] rounded-b-none flex flex-row justify-between text-center fixed w-full top-0 z-50 bg-background/80",
        isScrolled ? "border-accent/5" : "border-accent/0",
        className,
      )}
      {...props}
    >
      <div className="w-full">{props.children}</div>
      <DialogPrimitive.Close asChild>
        <Button animated variant="accent" size="icon" title="Close">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DialogPrimitive.Close>
    </div>
  );
};
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLDivElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setIsScrolled(scrollTop > 0);
      setScrollProgress(progress);
    };

    const scrollContainer = document.querySelector(".no-scrollbar");
    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed backdrop-blur-lg bg-primary/20 p-4 rounded-t-none rounded-b-[20px] justify-end gap-2 bottom-0 left-0 right-0 outline-1 outline outline-primary/10 flex flex-col-reverse",
        className,
      )}
      style={{
        borderTop: "1px solid",
        borderImage: `linear-gradient(90deg, 
          hsl(var(--primary) / ${isScrolled ? "1" : "0"}) ${scrollProgress}%, 
          hsl(var(--primary) / 0) ${scrollProgress}%
        ) 1`,
        borderImageSlice: "1 0 0 0",
      }}
      {...props}
    />
  );
};
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "flex flex-row ml-2 mb-0 text-base font-semibold leading-none tracking-tight text-center",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
