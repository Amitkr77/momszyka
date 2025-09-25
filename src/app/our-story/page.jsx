import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Heart, Globe, Mail, Facebook, Twitter, Instagram, ShoppingBag } from 'lucide-react';

const Momszyka = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
     
      <main className="flex-grow">
        <section className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-white" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs')" }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-shadow sm:text-5xl lg:text-6xl">Our Story</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-relaxed text-shadow sm:text-lg">
              At Momszyka, we believe in the power of mothers. Our journey began with a simple idea: to create a platform that celebrates and supports the incredible women who shape our world. We are more than just a brand; we are a community, a movement, and a testament to the strength and resilience of mothers everywhere.
            </p>
            <Button className="mt-8 bg-primary text-white text-base font-bold rounded-full hover:bg-primary/90">
              Join Our Community
            </Button>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="prose prose-lg mx-auto max-w-none text-gray-700 dark:text-gray-300">
                <h2 className="font-bold text-gray-900 dark:text-white">Empowering Mothers Through Fashion</h2>
                <p>
                  Momszyka was born from a desire to honor the unique journey of motherhood. We recognized that mothers often put their own needs aside, and we wanted to create a space where they could feel seen, valued, and empowered. Our clothing is designed to reflect the beauty, strength, and grace of mothers, allowing them to express their individuality and embrace their multifaceted roles.
                </p>
                <h2 className="font-bold text-gray-900 dark:text-white mt-5">The Momszyka Community</h2>
                <p>
                  At the heart of Momszyka is our vibrant community of mothers. We believe that connection and support are essential to navigating the joys and challenges of motherhood. Through our platform, we foster a sense of belonging, where mothers can share their stories, offer advice, and celebrate each other's successes. We are committed to creating a safe and inclusive space where every mother feels heard and understood.
                </p>
                <h2 className="font-bold text-gray-900 dark:text-white mt-5">Our Commitment to Sustainability</h2>
                <p>
                  We are dedicated to ethical and sustainable practices. Our clothing is made with care, using high-quality materials that are gentle on the environment and long-lasting. We believe in transparency and accountability, ensuring that our production processes align with our values. By choosing Momszyka, you are not only supporting mothers but also contributing to a more sustainable future.
                </p>
                <h2 className="font-bold text-gray-900 dark:text-white mt-5">Join the Momszyka Movement</h2>
                <p>
                  We invite you to join us on this journey of empowerment and celebration. Whether you're a mother, a daughter, a friend, or an ally, there's a place for you in the Momszyka community. Together, we can create a world where mothers are celebrated, supported, and empowered to thrive.
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-xl max-w-4xl mx-auto">
                <img alt="Mother and child sharing a happy moment" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-BPMDWEOvMcpO8Cuo1Sad2a6S0htJIejCWFkZgw-GJDX0evBCZgklqhlm-AVkjQAHCuIels4aZnvo_wlnkU1bF0cCPiFibzOJeBTMp82HIDB07bDNUwynNJaGpBn_XOfPvXDxPWVOEG21sOjmfNQdHf6bRRKKFBPFhzdENlbkYgp9vnXaZpGUwkC4qgm77BcW83lJQrppNpHa3puS0puX_ZOwwiQia9jWwEl-DPJrntuw449-3fW_yjUy4wcZw7zNopZZRc565o" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5 dark:bg-primary/10">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Collections</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-cover bg-center rounded-t-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4')" }}></div>
                  <div className="p-4">
                    <CardTitle>Empower Collection</CardTitle>
                    <CardDescription className="mt-2">Bold designs for the modern mother.</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$59.99</span>
                      <Button variant="outline">Shop Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-cover bg-center rounded-t-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4')" }}></div>
                  <div className="p-4">
                    <CardTitle>Comfort Collection</CardTitle>
                    <CardDescription className="mt-2">Soft, sustainable fabrics for everyday wear.</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$49.99</span>
                      <Button variant="outline">Shop Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-cover bg-center rounded-t-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9')" }}></div>
                  <div className="p-4">
                    <CardTitle>Elegance Collection</CardTitle>
                    <CardDescription className="mt-2">Timeless pieces for special occasions.</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$79.99</span>
                      <Button variant="outline">Shop Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-iconda16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Momszyka?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-background-light dark:bg-background-dark border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <Heart className="text-primary h-8 w-8 mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Empowerment</CardTitle>
                  <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">Our designs celebrate the strength and beauty of mothers, helping them feel confident and valued.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-background-light dark:bg-background-dark border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <Globe className="text-primary h-8 w-8 mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Sustainability</CardTitle>
                  <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">We use eco-friendly materials and ethical production to create lasting, high-quality clothing.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-background-light dark:bg-background-dark border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <ShoppingBag className="text-primary h-8 w-8 mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Community</CardTitle>
                  <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">Join a supportive network of mothers sharing stories, advice, and inspiration.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Subscribe to our newsletter for the latest collections, stories, and exclusive offers.</p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input type="email" placeholder="Enter your email" className="dark:bg-background-dark dark:text-gray-200" />
              <Button className="bg-primary text-white hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Momszyka;