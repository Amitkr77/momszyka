import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, Heart, ShieldCheck, ChefHat, UtensilsCrossed, Globe, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Momszyka = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#1b140d] dark:text-background-light">
      <main className="flex-grow">
        <section className="relative h-[60vh] min-h-[480px] bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnEzwnDUjofGNP6QJb42ID5xS1sIEgw29ZKZQ_8ovasqF68kz_Mz_V5Eo8CCGGcXXZcOhNOcPhp8Qt04xCQrWNuJyTDoOjG1U6N4LhogvKxAtzCXgwr79sOfR7g-uXB4ihKQH4cGoe9OZ_74PAemO7gRVmrqLKNTegYdVn9uaTuRab-0jjCEzVmGWWZkgp2mxupWa_36aZCeNzXrASprnlct-1-Ulwmb_-DWiH2EdmVD8_X1SB41vx_3CEH485S0ScCMsC4cw8PRc')"}}>
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl">Delicious Homemade Meals, Delivered with Love</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Connect with talented home cooks in your community and enjoy authentic, home-cooked meals delivered right to your door.</p>
            <Button className="mt-8 bg-primary text-white text-base font-bold hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6">
            <Card className="bg-background-light dark:bg-background-dark shadow-lg border-primary/10 dark:border-primary/20 mb-12">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-bold text-center text-[#1b140d] dark:text-background-light">Find Your Perfect Meal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 mb-1">Search by keyword</label>
                    <Input id="search" className="dark:bg-background-dark dark:text-background-light" placeholder="e.g., Italian, Vegan, Grandma's Lasagna" />
                  </div>
                  <div>
                    <label htmlFor="cuisine" className="block text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 mb-1">Cuisine Type</label>
                    <Select>
                      <SelectTrigger className="dark:bg-background-dark dark:text-background-light">
                        <SelectValue placeholder="All Cuisines" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Cuisines</SelectItem>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="mexican">Mexican</SelectItem>
                        <SelectItem value="indian">Indian</SelectItem>
                        <SelectItem value="chinese">Chinese</SelectItem>
                        <SelectItem value="american">American</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="dietary" className="block text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 mb-1">Dietary Preferences</label>
                    <Select>
                      <SelectTrigger className="dark:bg-background-dark dark:text-background-light">
                        <SelectValue placeholder="All Preferences" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Preferences</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                        <SelectItem value="keto">Keto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="bg-primary text-white text-base font-bold hover:opacity-90 transition-opacity">
                    Find Meals
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1b140d] dark:text-background-light">How Momszyka Works</h2>
              <p className="mt-4 text-lg text-[#1b140d]/70 dark:text-background-light/70">Discover the joy of home-cooked meals with Momszyka. We connect families with talented home cooks in their community, offering a convenient and delicious alternative to takeout.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-full aspect-video bg-cover bg-center rounded-xl" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLBKtzKcvT2-nefh-bHnoBf3Q_nu-ATy-pwr_P3iDFGUMGU37BJOj0mT_SHI_udomIw4SvJ1yFGnVc5v65Xbd3mligJDYZmSvKqCRXrOP0_vK0qe5CnMWMgLpgjLMTO0vGhDZmSJLVOmCVny8jTMOm5ynQDBAjbfUmSPd3esJKIeF-31l0MCIxodIUCd9eC1o0TUPRnb0qz20kWB0Lyzu6wifzPG6IB6IjB43SV_-5Bsas3lVSC8Osxirw_64zL824yGva8_9mrFk')"}}></div>
                  <h3 className="mt-4 text-xl font-bold text-[#1b140d] dark:text-background-light">Browse Local Cooks</h3>
                  <p className="mt-2 text-[#1b140d]/70 dark:text-background-light/70">Explore profiles of skilled home cooks in your area, showcasing their specialties and customer reviews.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-full aspect-video bg-cover bg-center rounded-xl" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsOhgqoY_aQBG4HjgCl-qbTR8quy6UZ8hjOGACSsTUbZ7UDSmVs7yqxvRnHU1JrGQiqBMvsSMMQx53Zf34_rHZqltXZwhbnXQrJV2T5E-VXkcpUqQv-xHeA-tS5TXwluHC4vcqDBCyEScDSdsffn13yI6AVlHvYQTCajDUAnMvTdY10BVPemdIphk9shH74nu3GO9_Ksl--5dAVZem-OqXeYioUZ7phbBawR-G9jeHuVCYh8UmQFMNvIZmCgkcsgm1Q68wbruss0Y')"}}></div>
                  <h3 className="mt-4 text-xl font-bold text-[#1b140d] dark:text-background-light">Order Your Favorites</h3>
                  <p className="mt-2 text-[#1b140d]/70 dark:text-background-light/70">Select from a variety of mouthwatering dishes, customize your order, and schedule a convenient delivery time.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-full aspect-video bg-cover bg-center rounded-xl" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_DtFlZYSwD8-5YTzLtLoKtFAt1Eq9h3jUpkyWlP-rE0NVLtcTU2DgjoQBwiDc0oJBeUK96RnnAFpCE6_A7cHnTcvfnaD4vRnQJYvtUnoiq3jSDjOYAQh9lptVCOTcy9qsahTcWbLhgMaYoZgdbliwbUWzw9idLTlFiSupqj1hjcl2r5Y2L3EYkUVY4syCW0EHqRYSweH11Lmwi9Ik7XQ5PEkD2kEtCzPW5IdsgLg6Kn4rt1ZxkPNWSJgbd5bNlKR40PZXiVtVo78')"}}></div>
                  <h3 className="mt-4 text-xl font-bold text-[#1b140d] dark:text-background-light">Enjoy Home-Cooked Goodness</h3>
                  <p className="mt-2 text-[#1b140d]/70 dark:text-background-light/70">Savor the taste of authentic, home-cooked meals made with fresh ingredients and delivered with care.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1b140d] dark:text-background-light">Why Choose Momszyka?</h2>
              <p className="mt-4 text-lg text-[#1b140d]/70 dark:text-background-light/70">Momszyka offers a unique dining experience that combines the convenience of delivery with the warmth and quality of home-cooked meals.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="bg-background-light dark:bg-background-dark border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <Star className="text-primary h-8 w-8 mb-4" />
                  <CardTitle className="text-xl font-bold text-[#1b140d] dark:text-background-light">Authentic Flavors</CardTitle>
                  <CardDescription className="mt-2 text-[#1b140d]/70 dark:text-background-light/70">Experience the true taste of home-cooked cuisine, with diverse dishes prepared by passionate cooks.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-background-light dark:bg-background-dark border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <Heart className="text-primary h-8 w-8 mb-4" />
                  <CardTitle className="text-xl font-bold text-[#1b140d] dark:text-background-light">Support Local Cooks</CardTitle>
                  <CardDescription className="mt-2 text-[#1b140d]/70 dark:text-background-light/70">Empower talented home cooks in your community by supporting their culinary skills and entrepreneurial spirit.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-background-light dark:bg-background-dark border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <ShieldCheck className="text-primary h-8 w-8 mb-4" />
                  <CardTitle className="text-xl font-bold text-[#1b140d] dark:text-background-light">Safe and Reliable</CardTitle>
                  <CardDescription className="mt-2 text-[#1b140d]/70 dark:text-background-light/70">Our platform ensures secure transactions, reliable deliveries, and a commitment to food safety standards.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b140d] dark:text-background-light mb-12">Featured Meals</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6-0n8J5M3p8vW2r2z0qT4w5d9gH6d4f5gH7iJ8k9lM0n1O2p3Q4r5S6t7U8v9W0x1Y2z3A4b5C6d7E8f9G0h1I2j3K4l5M6n7O8p9Q0r1S2t3U4v5W6x7Y8z9A0B1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7S8T9U0V1W2X3Y4Z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3')"}}></div>
                  <div className="p-4">
                    <CardTitle>Grandma's Lasagna</CardTitle>
                    <CardDescription className="mt-2">Classic Italian comfort food made with love.</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$12.99</span>
                      <Button variant="outline">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8A9B0C1D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z0')"}}></div>
                  <div className="p-4">
                    <CardTitle>Vegan Stir Fry</CardTitle>
                    <CardDescription className="mt-2">Fresh vegetables in a savory sauce.</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$10.99</span>
                      <Button variant="outline">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuE3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2a3b4c5d6e7f8g9h0')"}}></div>
                  <div className="p-4">
                    <CardTitle>Spicy Tacos</CardTitle>
                    <CardDescription className="mt-2">Authentic Mexican flavors with a kick.</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$11.49</span>
                      <Button variant="outline">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b140d] dark:text-background-light">What Our Community Says</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-primary/5 dark:bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img alt="Sarah M." className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOKgYrPh7MIEr6fCSlwdlCnJg-pffmSV0Q0m0FNBtDRozrbjqgvLoF8rTZgIAgo_IY8w08Yzq3A-tj3WgYOCX3cLpuVlYOZYJNuM-_lA18dEz4wDXThx9wRxGropkQIwwyjwnF6P1XAz0qU3E7pMqhVttRES0DHC8pR639jzM2CS752wtwalfaJhfwrNE4pB_VeqY5vE0AeSVDFMSAlTEQ1vzk_1TWjEZKo2ciKH_7eVuGOoQNMmN2ogDN_ak-59T5tjO3mb02k0s" />
                    <div>
                      <p className="font-bold text-[#1b140d] dark:text-background-light">Sarah M.</p>
                      <div className="flex text-primary">
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#1b140d]/80 dark:text-background-light/80">"Momszyka has been a game-changer for our family! The meals are delicious, healthy, and save me so much time. It's like having a personal chef without the hefty price tag."</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img alt="David L." className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORzqswqT2ia1SchrA2-ATJuauxtgxsm8a5WVzqQUrnfA7P_QRahwHMB_pa-u0MmK_JjrCDs_kMDv5NxgUGVm991_lUAIbuOLP8yeB6E6GZmekX7RpOkPQ608hceXpAfvyktNCvYyozvBAaO718h8mFsJe7N7ENYM_K4aiie5FHlU3KDsqEPAsV2lIFJtNJg56QW_AiXKVu9Igy4o-8SANjChzyJwBa73mkooCDhG6AT9ZIFApxpg1VM7HPOv1jFZ1ymav9hHaUQQ" />
                    <div>
                      <p className="font-bold text-[#1b140d] dark:text-background-light">David L.</p>
                      <div className="flex text-primary">
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#1b140d]/80 dark:text-background-light/80">"I love the variety of cuisines available on Momszyka. I've tried everything from Italian to Indian, and each dish has been fantastic. It's a great way to support local cooks and discover new flavors."</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img alt="Emily R." className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA73bdZWoYPtbugHof2K_odtINA-Vs1X2nRcF8XC10HlMMVZwZ_xtZuEwi4-0qTC4BwSwAJCc8al3_yo7cZqYRhnmSop3ck_sp238uFNVXKAz3bvK5O7xRQMeSX6OfO2a7GpCIvX_Uhe_xlUYoytRBBw_5gxG0WJbIoRii_d_s1AhZZRJLSaZC8z1qQwpKcuYVLfr9ZL2zMvY6kdflVr2Toa391-1oBbttK8ycE6AqfShZc0Os8iAim-gcA6M87_MWU0Ub6rjWQUVU" />
                    <div>
                      <p className="font-bold text-[#1b140d] dark:text-background-light">Emily R.</p>
                      <div className="flex text-primary">
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4" fill="currentColor" />
                        <Star className="w-4 h-4 text-primary/30" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#1b140d]/80 dark:text-background-light/80">"The food is generally very good, and the delivery is always on time. I appreciate the convenience and the ability to customize my orders. Sometimes the portions could be a bit larger."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b140d] dark:text-background-light mb-4">Stay Updated</h2>
            <p className="text-lg text-[#1b140d]/70 dark:text-background-light/70 mb-8">Subscribe to our newsletter for the latest recipes, tips, and exclusive offers.</p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input type="email" placeholder="Enter your email" className="dark:bg-background-dark dark:text-background-light" />
              <Button className="bg-primary text-white hover:opacity-90">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Momszyka;