// import Features from "../../components/Features/Features";
// import ModalDetails from "../../components/Modal/Modal";
// import Reviews from "../../components/Reviews/Reviews";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { selectOpenModal } from "../../redux/api/selectors";

// const DetailsPage = () => {
//   const navigate = useNavigate();
//   const isOpenModal = useSelector(selectOpenModal);
//   const [modalIsOpen, setIsOpen] = useState(isOpenModal);
//   const { id } = useParams();

//   //   const openModal = () => {
//   //     if (!modalIsOpen) {
//   //       setIsOpen(true);
//   //     }

//   //     navigate(`/catalog/${item.id}`);
//   //   };

//   const closeModal = () => {
//     if (modalIsOpen) {
//       setIsOpen(false);
//     }

//     // setIsOpen(false);
//     navigate(`/catalog`);
//   };

//   return (
//     <>
//       {isOpenModal && (
//         <ModalDetails
//           modalIsOpen={modalIsOpen}
//           closeModal={closeModal}
//           itemID={id}
//         />
//       )}

//       <Features />
//       <Reviews />
//     </>
//   );
// };

// export default DetailsPage;
