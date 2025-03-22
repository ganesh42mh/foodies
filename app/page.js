import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-12 bg-gray-50">
      {/* Hero Section */}
      <header className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Delicious Food, Delivered Fast</h1>
        <p className="text-lg text-gray-600 mb-6">
          Order your favorite meals from top restaurants and get them delivered to your doorstep in minutes.
        </p>
        <Button className="px-6 py-3 text-lg">Order Now</Button>
      </header>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fast Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get your food delivered hot and fresh within 30 minutes.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wide Variety</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Choose from thousands of restaurants and cuisines.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Easy Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Secure online payments with multiple options.</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </footer>
    </div>
  );
}
