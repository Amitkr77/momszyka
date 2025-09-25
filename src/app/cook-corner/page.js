import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Users, DollarSign, ChefHat, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Momszyka = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-stone-900 dark:text-stone-100">
      <div className="layout-container flex h-full grow flex-col">
       
        <main className="flex flex-1 flex-col items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-16 sm:py-12">
              <div className="relative min-h-[80vh] flex flex-col items-center justify-center rounded-xl overflow-hidden p-6 text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9V9QGlRkcmYbJWvdOSJnc-Y-D4wr1rpIGh8HOx8gl1HUOc5mpL8Wmo_QfODVhmJJsgG0NQPNtGMv4hVvD6NqrY7GwM1Zn3wUYqKFdzCcwZndeNNiYjMuHZ4O5PO8uWb_prWyIncjt_csrI1Vxw7IUj4T_Tlne9es1FnIl0i9TUJXLbFw5NTgGr6_iSK5RKat-sx3OUZnQy-HNmhzFqLSOpW4cgd1V6xEK4zU_h_zsJtaAmoK0EyS6GPpdQ-2zuuScmRqfmLp2A54')" }}>
                <div className="flex flex-col gap-4 max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">Join Momszyka as a Cook</h1>
                  <h2 className="text-base sm:text-lg text-white/90">Share your culinary passion and earn by cooking delicious meals for your community.</h2>
                </div>
                <Button className="mt-8 flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                  Get Started
                </Button>
              </div>
            </div>
            <section className="py-16 sm:py-24">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">Why Cook with Momszyka?</h2>
                <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400">Discover the advantages of becoming a Momszyka cook and how we support your culinary journey.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-background-light dark:bg-background-dark border-stone-200 dark:border-stone-800">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-primary/20 rounded-full text-primary">
                      <Clock className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-6 text-xl font-bold">Flexibility</CardTitle>
                    <CardDescription className="mt-2 text-sm text-stone-600 dark:text-stone-400">Set your own hours and cook from the comfort of your home.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-background-light dark:bg-background-dark border-stone-200 dark:border-stone-800">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-primary/20 rounded-full text-primary">
                      <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-6 text-xl font-bold">Community</CardTitle>
                    <CardDescription className="mt-2 text-sm text-stone-600 dark:text-stone-400">Connect with food lovers and build a loyal customer base.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-background-light dark:bg-background-dark border-stone-200 dark:border-stone-800">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-primary/20 rounded-full text-primary">
                      <DollarSign className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-6 text-xl font-bold">Earnings</CardTitle>
                    <CardDescription className="mt-2 text-sm text-stone-600 dark:text-stone-400">Earn a competitive income by sharing your culinary creations.</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section className="py-16 sm:py-24">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">Featured Cooks</h2>
                <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400">Meet some of our talented cooks who bring delicious meals to your table.</p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-cover bg-center rounded-t-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOKgYrPh7MIEr6fCSlwdlCnJg-pffmSV0Q0m0FNBtDRozrbjqgvLoF8rTZgIAgo_IY8w08Yzq3A-tj3WgYOCX3cLpuVlYOZYJNuM-_lA18dEz4wDXThx9wRxGropkQIwwyjwnF6P1XAz0qU3E7pMqhVttRES0DHC8pR639jzM2CS752wtwalfaJhfwrNE4pB_VeqY5vE0AeSVDFMSAlTEQ1vzk_1TWjEZKo2ciKH_7eVuGOoQNMmN2ogDN_ak-59T5tjO3mb02k0s')" }}></div>
                    <div className="p-4">
                      <CardTitle>Maria G.</CardTitle>
                      <CardDescription className="mt-2">Specializing in authentic Italian cuisine.</CardDescription>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Lasagna</span>
                        <Button variant="outline">View Menu</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-cover bg-center rounded-t-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCORzqswqT2ia1SchrA2-ATJuauxtgxsm8a5WVzqQUrnfA7P_QRahwHMB_pa-u0MmK_JjrCDs_kMDv5NxgUGVm991_lUAIbuOLP8yeB6E6GZmekX7RpOkPQ608hceXpAfvyktNCvYyozvBAaO718h8mFsJe7N7ENYM_K4aiie5FHlU3KDsqEPAsV2lIFJtNJg56QW_AiXKVu9Igy4o-8SANjChzyJwBa73mkooCDhG6AT9ZIFApxpg1VM7HPOv1jFZ1ymav9hHaUQQ')" }}></div>
                    <div className="p-4">
                      <CardTitle>Aisha K.</CardTitle>
                      <CardDescription className="mt-2">Bringing vibrant Indian flavors to life.</CardDescription>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Butter Chicken</span>
                        <Button variant="outline">View Menu</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-cover bg-center rounded-t-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA73bdZWoYPtbugHof2K_odtINA-Vs1X2nRcF8XC10HlMMVZwZ_xtZuEwi4-0qTC4BwSwAJCc8al3_yo7cZqYRhnmSop3ck_sp238uFNVXKAz3bvK5O7xRQMeSX6OfO2a7GpCIvX_Uhe_xlUYoytRBBw_5gxG0WJbIoRii_d_s1AhZZRJLSaZC8z1qQwpKcuYVLfr9ZL2zMvY6kdflVr2Toa391-1oBbttK8ycE6AqfShZc0Os8iAim-gcA6M87_MWU0Ub6rjWQUVU')" }}></div>
                    <div className="p-4">
                      <CardTitle>Carlos M.</CardTitle>
                      <CardDescription className="mt-2">Master of spicy Mexican dishes.</CardDescription>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Tacos</span>
                        <Button variant="outline">View Menu</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section className="py-16 sm:py-24">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">Frequently Asked Questions</h2>
              </div>
              <div className="mt-12 max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border border-stone-200 dark:border-stone-800 rounded-lg">
                    <AccordionTrigger className="px-4 py-2">How do I become a cook?</AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-stone-600 dark:text-stone-400">
                      To become a cook, simply sign up on our platform, complete the onboarding process, and start creating your menu. We'll guide you every step of the way.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border border-stone-200 dark:border-stone-800 rounded-lg">
                    <AccordionTrigger className="px-4 py-2">What are the requirements?</AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-stone-600 dark:text-stone-400">
                      You'll need a clean kitchen, passion for cooking, and compliance with local food safety regulations. We provide resources to help you meet all requirements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border border-stone-200 dark:border-stone-800 rounded-lg">
                    <AccordionTrigger className="px-4 py-2">How do I get paid?</AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-stone-600 dark:text-stone-400">
                      Payments are processed securely through our platform. You'll receive your earnings directly in your bank account on a weekly basis.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border border-stone-200 dark:border-stone-800 rounded-lg">
                    <AccordionTrigger className="px-4 py-2">Can I choose what to cook?</AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-stone-600 dark:text-stone-400">
                      Absolutely! You have full creative control over your menu, allowing you to showcase your signature dishes and culinary style.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
            <section className="py-16 sm:py-24">
              <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 sm:p-12 lg:p-16 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">Ready to Share Your Culinary Skills?</h2>
                  <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-stone-300">Join our community of cooks today and start your culinary journey with Momszyka.</p>
                  <Button className="mt-8 flex w-full sm:w-auto mx-auto min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                    Sign Up as a Cook
                  </Button>
                </div>
              </div>
            </section>
           
          </div>
        </main>
       
      </div>
    </div>
  );
};

export default Momszyka;