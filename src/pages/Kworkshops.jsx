import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export const Kworkshops = () => {
  return (
    <>
      <div className="flex flex-row ml-44 m-28 space-x-28">
        <div className="w-3/5  ">
          <Input className="rounded-[18px] h-12"></Input>
        </div>
        <div >
          <Select>
            <SelectTrigger className="w-[350px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-14 mx-48 my-16">
        <Card className="flex flex-col justify-center items-center w-full rounded-[25px]">
          <div className="w-full h-72">
            <img
              className="rounded-t-[25px] w-full object-cover h-full"
              src="/public/img/kimchiworkshop.jpg"
              alt=""
            />
          </div>
          <CardHeader className="p-5">
            <CardTitle className="text-3xl text-start">
              Kimchi Workshop
            </CardTitle>
            <CardDescription className="text-2xl">Price 50€</CardDescription>
          </CardHeader>
          <CardContent className="px-10">
            <p>
              Join our Kimchi Workshop! Learn to make this delicious and healthy
              Korean dish with guidance from culinary experts. Discover the
              secrets of fermentation and the health benefits of kimchi. No
              prior experience needed, just a desire to enjoy and learn. Reserve
              your spot and enjoy a unique culinary experience!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button className="rounded-full bg-pink-600 w-2/4">Book</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-center items-center w-full rounded-[25px]">
          <div className="w-full h-72">
            <img
              className="rounded-t-[25px] w-full object-cover h-full"
              src="/public/img/kimchiworkshop.jpg"
              alt=""
            />
          </div>
          <CardHeader className="p-5">
            <CardTitle className="text-3xl text-start">
              Kimchi Workshop
            </CardTitle>
            <CardDescription className="text-2xl">Price 50€</CardDescription>
          </CardHeader>
          <CardContent className="px-10">
            <p>
              Join our Kimchi Workshop! Learn to make this delicious and healthy
              Korean dish with guidance from culinary experts. Discover the
              secrets of fermentation and the health benefits of kimchi. No
              prior experience needed, just a desire to enjoy and learn. Reserve
              your spot and enjoy a unique culinary experience!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button className="rounded-full bg-pink-600 w-2/4">Book</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-center items-center w-full rounded-[25px]">
          <div className="w-full h-72">
            <img
              className="rounded-t-[25px] w-full object-cover h-full"
              src="/public/img/kimchiworkshop.jpg"
              alt=""
            />
          </div>
          <CardHeader className="p-5">
            <CardTitle className="text-3xl text-start">
              Kimchi Workshop
            </CardTitle>
            <CardDescription className="text-2xl">Price 50€</CardDescription>
          </CardHeader>
          <CardContent className="px-10">
            <p>
              Join our Kimchi Workshop! Learn to make this delicious and healthy
              Korean dish with guidance from culinary experts. Discover the
              secrets of fermentation and the health benefits of kimchi. No
              prior experience needed, just a desire to enjoy and learn. Reserve
              your spot and enjoy a unique culinary experience!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button className="rounded-full bg-pink-600 w-2/4">Book</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-center items-center w-full rounded-[25px]">
          <div className="w-full h-72">
            <img
              className="rounded-t-[25px] w-full object-cover h-full"
              src="/public/img/kimchiworkshop.jpg"
              alt=""
            />
          </div>
          <CardHeader className="p-5">
            <CardTitle className="text-3xl text-start">
              Kimchi Workshop
            </CardTitle>
            <CardDescription className="text-2xl">Price 50€</CardDescription>
          </CardHeader>
          <CardContent className="px-10">
            <p>
              Join our Kimchi Workshop! Learn to make this delicious and healthy
              Korean dish with guidance from culinary experts. Discover the
              secrets of fermentation and the health benefits of kimchi. No
              prior experience needed, just a desire to enjoy and learn. Reserve
              your spot and enjoy a unique culinary experience!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button className="rounded-full bg-pink-600 w-2/4">Book</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-center items-center w-full rounded-[25px]">
          <div className="w-full h-72">
            <img
              className="rounded-t-[25px] w-full object-cover h-full"
              src="/public/img/kimchiworkshop.jpg"
              alt=""
            />
          </div>
          <CardHeader className="p-5">
            <CardTitle className="text-3xl text-start">
              Kimchi Workshop
            </CardTitle>
            <CardDescription className="text-2xl">Price 50€</CardDescription>
          </CardHeader>
          <CardContent className="px-10">
            <p>
              Join our Kimchi Workshop! Learn to make this delicious and healthy
              Korean dish with guidance from culinary experts. Discover the
              secrets of fermentation and the health benefits of kimchi. No
              prior experience needed, just a desire to enjoy and learn. Reserve
              your spot and enjoy a unique culinary experience!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button className="rounded-full bg-pink-600 w-2/4">Book</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-center items-center w-full rounded-[25px]">
          <div className="w-full h-72">
            <img
              className="rounded-t-[25px] w-full object-cover h-full"
              src="/public/img/kimchiworkshop.jpg"
              alt=""
            />
          </div>
          <CardHeader className="p-5">
            <CardTitle className="text-3xl text-start">
              Kimchi Workshop
            </CardTitle>
            <CardDescription className="text-2xl">Price 50€</CardDescription>
          </CardHeader>
          <CardContent className="px-10">
            <p>
              Join our Kimchi Workshop! Learn to make this delicious and healthy
              Korean dish with guidance from culinary experts. Discover the
              secrets of fermentation and the health benefits of kimchi. No
              prior experience needed, just a desire to enjoy and learn. Reserve
              your spot and enjoy a unique culinary experience!
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button className="rounded-full bg-pink-600 w-2/4">Book</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
