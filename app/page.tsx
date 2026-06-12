import PageTransition from "@/components/layout/PageTransition";
import AnimatedStats from "@/components/ui/AnimatedStats";
import Card from "@/components/ui/Card";
import RevenueChart from "@/components/charts/RevenueChart";
import UsersChart from "@/components/charts/UsersChart";

export default function Home() {
  return (
    <PageTransition>
      <div className="space-y-8">
        
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <AnimatedStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <RevenueChart />
          </Card>

          <Card>
            <UsersChart />
          </Card>
        </div>

      </div>
    </PageTransition>
  );
}