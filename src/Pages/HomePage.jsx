import { useSelector } from 'react-redux';
import '../CSS/Home.css';
import { LoginModal } from '../components/auth/LoginModal';
import { DetailsModal } from '../components/auth/DetailsModal';

export function HomePage() {
  const {isOpen, modalType} = useSelector((state) => state.modal);

  console.log("🔥 Redux modal state =>", { isOpen, modalType });

  return (
    <>
      <div className="images-dashboard-container">
        <img
          src="/images/Food1.jpg"
          alt="food1"
          className="images-dashboard"
        />

      </div>
        {isOpen && modalType === "login" && <LoginModal />}
        {isOpen && modalType === "details" && <DetailsModal />}

    </>
  );
}
