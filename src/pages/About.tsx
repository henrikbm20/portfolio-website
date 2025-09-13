export function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About WebCraft</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're passionate about creating websites that drive real business results.
          </p>
          <div className="prose prose-lg max-w-none">
            <p>
              Based in Copenhagen, Denmark, we specialize in creating beautiful, fast, and 
              SEO-optimized websites that convert visitors into customers. Our team combines 
              technical expertise with design excellence to deliver web solutions that work.
            </p>
            <p>
              Whether you're a small local business or a growing company, we tailor our 
              approach to meet your specific needs and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}