export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Wesley Tomé. All rights reserved.</p>
        <p>Product & Technology Executive · Digital Transformation Leader</p>
      </div>
    </footer>
  );
};
