import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '@/pages/loading/Loading';

const AppLayout = lazy(() => import('@/layouts/AppLayout'));
const Chat = lazy(() => import('@/pages/chat/Chat'));
const Description = lazy(() => import('@/pages/description/Description'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path={'/chat/:id'} element={<Chat />} />
            <Route path={'*'} element={<Description />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
