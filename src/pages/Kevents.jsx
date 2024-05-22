import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Kevents = () => {
  return (
    <>
    <div className="relative w-full h-40 flex justify-center items-center mt-6">
      <img 
        src="/public/img/koreanday.jpg" 
        alt="Seollal celebration" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start">
        <div className=" text-white p-8">
          <h1 className="text-7xl font-bold mb-4">Korean celebrations</h1>
        </div>
      </div>
    </div>
      <div className="flex justify-center items-center h-screen flex-col space-y-6">
        <Card className="w-3/5 rounded-[9px] h-72">
          <div className="flex flex-row mb-3 h-full w-full">
            <div className="h-auto object-fill ">
              <img
                className="rounded-l-[9px] w-[1000px] object-cover h-full"
                src="/public/img/seollal.jpg"
                alt=""
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-4xl">Seollal (설랄)</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p>
                    Celebrate Seollal with Kemistry Space and immerse yourself
                    in rich Korean tradition. Experience the joy and unique
                    rituals of this ancient holiday while sharing special
                    moments with friends and family. Join us in commemorating
                    this important Korean holiday with authenticity and
                    excitement
                  </p>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="w-3/5 rounded-[9px] h-72">
          <div className="flex flex-row mb-3 h-full w-full">
            <div className="h-auto object-fill ">
              <img
                className="rounded-l-[9px] w-[1000px] object-cover h-full"
                src="/public/img/Chuseok.jpeg"
                alt=""
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-4xl">Chuseok (추석)</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p>
                    Celebrate the tradition and spirit of the Korean Moon
                    Festival ! Join us to honor our ancestors and share moments
                    of joy and gratitude with your loved ones. Experience the
                    magic of Chuseok with , delightful feasts, and a celebration
                    full of family bonds. Don't miss out on this unique
                    experience!
                  </p>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      <div className="relative w-full h-40 flex justify-center items-center mt-10">
      <img 
        src="/public/img/restaurant.jpg" 
        alt="Seollal celebration" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end">
        <div className=" text-white p-8">
          <h1 className="text-7xl font-bold mb-4">K-Brunch</h1>
        </div>
      </div>
    </div>
    </>
  );
};
