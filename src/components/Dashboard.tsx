import CardComp from "@/components/CardComp";
import usersIcon from "@/assets/images/user.png";
import withdrawIcon from "@/assets/images/withdrawl.png";
import transactionIcon from "@/assets/images/deposit.png";
import referralIcon from "@/assets/images/referal.png";
import { Link } from "react-router-dom";
import ChartComp from "@/components/ChartComp";
import { PieChartComp } from "@/components/PieChart";
const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="py-5 tracking-tighter">Dashboard</h1>
      <h2 className="ml-1 mb-5">Welcome, Let's get back to work</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center mb-5">
        <Link to={"/"}>
          <CardComp title="All Users" content={100} image={usersIcon} />
        </Link>
        <CardComp title="Withdrawl" content={100} image={withdrawIcon} />
        <CardComp title="Transaction" content={100} image={transactionIcon} />
        <CardComp title="Referrals" content={10} image={referralIcon} />
      </div>
      <div className="flex flex-wrap w-full">
        <ChartComp
          title="Growth"
          description="Monthly Growth"
          popularity={200}
          visitors={300}
        />
        <PieChartComp
          title="Activity"
          description="Visitors got here this month"
        />
      </div>
    </div>
  );
};

export default Dashboard;
