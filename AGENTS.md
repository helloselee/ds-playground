<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI: shadcn/ui on Base UI (not Radix)

This project's shadcn install uses the `base-nova` style, built on **Base UI**
(`@base-ui/react`), not Radix. Conventions:

- Polymorphism uses the `render` prop, not `asChild`.
  e.g. `<Button render={<Link href="/x" />}>`, `<SheetTrigger render={<Button/>} />`.
- Rendering `Button` as a link/anchor needs `nativeButton={false}`, or Base UI
  logs an accessibility error.
- Style interaction states with bracketed data-attribute selectors:
  `data-[checked]:`, `data-[unchecked]:` (e.g. `data-[unchecked]:hover:border-ring`).
- Selection controls (`Checkbox`, `RadioGroup`) ship WITHOUT hover states — add
  them at the component level if needed.
- Base UI event callbacks are nullable/union-typed (`Select` gives `string | null`,
  `Slider` gives `number | readonly number[]`); normalize before setting state.
- The `form` component isn't in this style's registry; compose forms with
  `Label` + `Input` directly.
