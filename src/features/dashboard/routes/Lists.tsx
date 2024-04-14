import { DashboardLayout } from '../components/Layout';
import { MyListsSection } from '../components/MyListsSection';


export const Lists = () => {
  return (
    <DashboardLayout title="Mis Listas">
      <MyListsSection />
    </DashboardLayout>
  );
};