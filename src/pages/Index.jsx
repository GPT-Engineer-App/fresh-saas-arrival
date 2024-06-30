import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SaaS Company</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-700">Features</a></li>
              <li><a href="#pricing" className="text-gray-700">Pricing</a></li>
              <li><a href="#contact" className="text-gray-700">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our SaaS</h2>
          <p className="text-lg text-gray-600 mb-6">We provide the best solutions for your business.</p>
          <Button variant="primary">Get Started</Button>
        </section>

        <Separator className="my-12" />

        <section id="features" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Description of feature one.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Description of feature two.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Description of feature three.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="pricing" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">$10/month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">$30/month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">$100/month</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="contact" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <textarea id="message" className="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
            </div>
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2023 SaaS Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;