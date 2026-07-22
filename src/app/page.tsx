import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, type Product } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const products: Product[] = [
  { name: "Wool Overshirt", price: "$148", tone: "oklch(0.88 0.02 60)" },
  { name: "Linen Trouser", price: "$98", was: "$130", tone: "oklch(0.9 0.01 120)", sale: true },
  { name: "Cashmere Crew", price: "$220", tone: "oklch(0.85 0.03 40)" },
  { name: "Cotton Tee", price: "$42", tone: "oklch(0.92 0.005 250)" },
  { name: "Leather Belt", price: "$68", was: "$85", tone: "oklch(0.8 0.04 50)", sale: true },
  { name: "Merino Beanie", price: "$54", tone: "oklch(0.87 0.02 200)" },
  { name: "Silk Scarf", price: "$110", tone: "oklch(0.9 0.03 340)" },
  { name: "Canvas Tote", price: "$74", tone: "oklch(0.86 0.02 90)" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-5">Fall Collection 2026</Badge>
          <h1 className="text-4xl font-medium tracking-tight text-balance md:text-6xl">
            Considered essentials, made to last.
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground text-pretty">
            A tightly edited wardrobe of natural fibers and quiet colors. No noise, no seasons to chase.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button size="lg">
              Shop the collection
              <ArrowRight />
            </Button>
            <Button size="lg" variant="ghost">Lookbook</Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Product grid */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">The edit</h2>
            <p className="mt-1 text-sm text-muted-foreground">Eight pieces, endlessly wearable.</p>
          </div>
          <Tabs defaultValue="all" className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="sale">Sale</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
