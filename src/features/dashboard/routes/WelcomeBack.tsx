import { DashboardLayout } from '../components/Layout';
import { DashboardContent } from '../components/DashboardContent';


export const WelcomeBack = () => {
  return (
    <DashboardLayout title="Dashboard">
      <DashboardContent />
    </DashboardLayout>
  );
};