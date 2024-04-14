import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../components/Layout';
import { MyFilmsSection } from '../components/MyFilmsSection';


export const Films = () => {
    const { id } = useParams();
  return (
    <DashboardLayout title={`Películas de la lista ${id}`}>
      <MyFilmsSection />
    </DashboardLayout>
  );
};