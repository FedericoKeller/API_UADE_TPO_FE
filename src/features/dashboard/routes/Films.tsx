import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../components/Layout';
import { MyFilmsSection } from '../components/MyFilmsSection';
import { useList } from '../api/getList';
import { Fallback } from '@/components/Fallback';


export const Films = () => {
    const { id } = useParams();
    const list = useList({ data: { listId: id } });

    if(list.isLoading) return <Fallback />;
    
  return (
    <DashboardLayout title={`Películas de la lista "${list.data!.title}"`}>
      <MyFilmsSection />
    </DashboardLayout>
  );
};