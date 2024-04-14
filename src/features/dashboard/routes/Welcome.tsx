import { DashboardLayout } from '../components/Layout';
import { WelcomeSection } from '../components/WelcomeSection';


export const Welcome = () => {
  return (
    <DashboardLayout title="Bienvenido">
      <WelcomeSection />
    </DashboardLayout>
  );
};