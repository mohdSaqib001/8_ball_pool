import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardComp = ({ title, content, image }) => {
  return (
    <Card className="flex flex-row place-items-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 hover:border-2 hover:border-blue-500 hover:text-black">
      <div className="place-items-center">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </div>
      <img
        src={image}
        alt="User Image"
        className="w-24 h-24 object-cover rounded-full"
      />
    </Card>
  );
};

export default CardComp;
