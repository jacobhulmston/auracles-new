"use client";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    setBackgroundColorOnScale={false}
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-md", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // Check if footer exists among children
  const hasFooter = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      typeof child.type !== "string" &&
      "displayName" in child.type &&
      (child.type.displayName === "DrawerFooter" ||
        child.type.displayName === "CredenzaFooter"),
  );

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex h-auto max-h-[calc(100vh-8rem)] flex-col rounded-t-[10px] border bg-background",
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            typeof child.type !== "string" &&
            "displayName" in child.type &&
            (child.type.displayName === "DrawerHeader" ||
              child.type.displayName === "DrawerFooter" ||
              child.type.displayName === "CredenzaHeader" ||
              child.type.displayName === "CredenzaFooter")
          ) {
            return child;
          }
          // Adjust padding based on footer presence
          return (
            <div
              className={`no-scrollbar overflow-y-auto px-4 pt-[69px] ${
                hasFooter ? "pb-24" : "pb-4"
              }`}
            >
              {child}
            </div>
          );
        })}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
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
      <DrawerClose className="bg-transparent">
        <Button animated variant="accent" size="icon" title="Close">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DrawerClose>
    </div>
  );
};
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
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
        "fixed backdrop-blur-lg bg-primary/20 p-4 rounded-t-none justify-end gap-2 bottom-0 left-0 right-0 outline-1 outline outline-primary/10 flex flex-col-reverse",
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
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <div>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[30px] h-2 w-[80px] rounded-full bg-accent" />
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "flex flex-row ml-2 mb-0 text-base font-semibold leading-none tracking-tight text-center",
        className,
      )}
      {...props}
    />
  </div>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
