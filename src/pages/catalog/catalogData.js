// import compDesk1 from "./desksImages/compDesk1.jpg";
// import kitDesk1 from "./desksImages/kitDesk1.jpg";
// import cofDesk1 from "./desksImages/cofDesk1.jpg";
// import compDesk2 from "./desksImages/compDesk2.jpg";
// import kitDesk2 from "./desksImages/kitDesk2.jpg";
// import cofDesk2 from "./desksImages/cofDesk2.jpg";
// import compDesk3 from "./desksImages/compDesk3.jpg";
// import kitDesk3 from "./desksImages/kitDesk3.jpg";
// import cofDesk3 from "./desksImages/cofDesk3.jpg";

// const deskData = [
//     {
//         id: 1,
//         imageSrc: compDesk1,
//         type: "Computer Desk",
//         description: "Solid Wood Corner Writing Desk Modern Tall Office Desk.",
//         material: "Wood",
//         price: 999,
//     },

//     {
//         id: 2,
//         imageSrc: kitDesk1,
//         type: "Kitchen Table",
//         description: "Custom White Oak Dining Table Top With Wooden Legs.",
//         material: "Wood",
//         price: 2500,
//     },

//     {
//         id: 3,
//         imageSrc: cofDesk1,
//         type: "Coffee Table",
//         description: "Parker Walnut & Marble Coffee Table.",
//         material: "Wood",
//         price: 1699,
//     },

//     {
//         id: 4,
//         imageSrc: compDesk2,
//         type: "Computer Desk",
//         description: "Contemporary Writing Desk Rectangular Computer Desk.",
//         material: "Glass",
//         price: 2100,
//     },

//     {
//         id: 5,
//         imageSrc: kitDesk2,
//         type: "Kitchen Table",
//         description: "Classic modern dining tables taht make every dinner.",
//         material: "Wood",
//         price: 850,
//     },

//     {
//         id: 6,
//         imageSrc: cofDesk2,
//         type: "Coffee Table",
//         description: "Statement marble coffee tables, retro glass or vintage.",
//         material: "Glass",
//         price: 800,
//     },

//     {
//         id: 7,
//         imageSrc: compDesk3,
//         type: "Computer Desk",
//         description: "Rectangle Office Desk Modern Style Computer Desk.",
//         material: "Wood",
//         price: 1830,
//     },

//     {
//         id: 8,
//         imageSrc: kitDesk3,
//         type: "Kitchen Table",
//         description: "Faux Leather Dining Chairs Or Round Glass Dining Table.",
//         material: "Glass",
//         price: 1200,
//     },

//     {
//         id: 9,
//         imageSrc: cofDesk3,
//         type: "Coffee Table",
//         description: "Coffee table is made of grade cherry wood, which is firm.",
//         material: "Wood",
//         price: 2050,
//     },
// ];

// export default deskData;

// import React, { useState, useEffect } from "react";
// import { getDesks } from "../../api";
// import DeskList2 from "../../components/desks/deskListItems.jsx"; 


// const CatalogData = () => {
//   const [itemsData, setItemsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getDesks();
//         const dataArray = Array.isArray(response.data) ? response.data : [];
//         setItemsData(dataArray);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
//   }, []);
  
  

//   return (
//     <div>
//       {itemsData && itemsData.length > 0 ? (
//         <DeskList2 data={itemsData} />
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default CatalogData;
