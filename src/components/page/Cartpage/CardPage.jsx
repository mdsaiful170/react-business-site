import { useContext, useState } from "react";
import { CartContext } from "../../ui/ContextBox";
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { Check, ChevronUp, Clock, MapPin, Wallet, X } from "lucide-react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const CardPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  // const [producthistory, sethistory] = useState([]);
  const [isOpenmodal, setModal] = useState(false);
  const [isOrderConframe, setorderconframe] = useState(false);
  const [isCardOpen, setCardopen] = useState(false);

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const discountPrice = () => totalPrice() * 0.15;
  const totalpricewithDiscount = () => totalPrice() - discountPrice();
  const taxPrice = () => totalpricewithDiscount() * 0.05;
  const totalpricewithdiscountandtax = () =>
    totalpricewithDiscount() + taxPrice();

  // useEffect(() => {
  //   sethistory((prevHistory) => {
  //     // Filter products that are still in the cart
  //     const updatedHistory = prevHistory.filter((historyItem) =>
  //       cart.some((cartItem) => cartItem.id === historyItem.id)
  //     );

  //     // Add new products to the history
  //     cart.forEach((item) => {
  //       const existingItemIndex = updatedHistory.findIndex(
  //         (historyItem) => historyItem.id === item.id
  //       );

  //       if (existingItemIndex === -1) {
  //         // Add new product to history
  //         updatedHistory.push(item);
  //       } else {
  //         // Update quantity of existing product in the history
  //         updatedHistory[existingItemIndex].quantity = item.quantity;
  //       }
  //     });

  //     return updatedHistory;
  //   });
  // }, [cart]);

  const handleConfirmOrder = () => {
    setorderconframe(true);
  };
  const handleCloseOrderConfirm = () => {
    setorderconframe(false);
    setModal(false);
    dispatch({ type: "CLEAR_CART" });
  };

  const handleDownloadPDF = async () => {
    const doc = new jsPDF();

    // Header Section
    doc.setFontSize(16);
    doc.text("Order Details", 20, 20);

    // Prepare Table Data
    const tableData = [];

    for (const item of cart) {
      tableData.push([
        item.name, // Product Name
        `${item.isdate}.#.${item.istime}`, // Date
        item.quantity, // Quantity
        `${item.price}`, // Unit Price
        `${item.price * item.quantity}`, // Total
      ]);
    }

    // Create Table without Images
    doc.autoTable({
      head: [["Product Name", "Date", "Quantity", "Unit Price", "Total"]],
      body: tableData,
      startY: 30,
      styles: { overflow: "linebreak", fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 60 }, // Product Name
        1: { cellWidth: 50, halign: "center" }, // Date
        2: { cellWidth: 20, halign: "center" }, // Quantity
        3: { cellWidth: 20, halign: "right" }, // Unit Price
        4: { cellWidth: 15, halign: "right" }, // Total
      },
    });

    // Add Gap between Table and Totals Section
    const finalY = doc.lastAutoTable.finalY || 40; // Get last Y position
    const gap = 5; // 20px gap
    let yPosition = finalY + gap;

    // Totals Section - Now formatted as a table
    const totals = [
      { label: "Total Product Price:", value: `$${totalPrice().toFixed(2)}` },
      {
        label: "Your Discount (15%):",
        value: `-$${discountPrice().toFixed(2)}`,
      },
      {
        label: "Price After Discount:",
        value: `$${totalpricewithDiscount().toFixed(2)}`,
      },
      { label: "Tax (5%):", value: `$${taxPrice().toFixed(2)}` },
      {
        label: "Grand Total:",
        value: `$${totalpricewithdiscountandtax().toFixed(2)}`,
      },
    ];

    // Create a new table for totals
    const totalTableData = totals.map((total) => [total.label, total.value]);

    doc.autoTable({
      head: [["Label", "Amount"]],
      body: totalTableData,
      startY: yPosition,
      styles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 120, halign: "left" }, // Label column (left-aligned)
        1: { cellWidth: 20, halign: "right" }, // Amount column (right-aligned)
      },
    });

    // Save the PDF
    doc.save("order-details.pdf");
  };

  return (
    <>
      <section>
        <HeadingTag
          className={"text-center text-2xl font-bold text-secondary py-2"}
        >
          Cart Page
        </HeadingTag>
        <ContainerTage className={"border border-[#F5FAFF] shadow-custom-4 rounded-md  "}>
          {cart.length === 0 ? (
            <p className="text-xl font-semibold text-secondary text-center py-1">
              Your cart is empaty
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 border px-3 gap-5 divide-x-1  ">
              <div className="col-span-2 max-h-[32rem] overflow-y-auto">
                <span className=" text-lg text-secondary/75 py-1">
                  Your cart
                </span>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="  grid grid-cols-3 gap-5  md:grid-cols-4 items-start  border-b border-[#E4E7EC] pb-7 pt-5"
                  >
                    {/* img box */}
                    <div>
                      <img
                        src={item.img}
                        className=" w-32  object-cover  rounded-xl"
                        alt=""
                      />
                    </div>

                    {/* box content */}
                    <div className="col-span-2">
                      <h3 className="text-secondary font-bold text-xl pb-3">
                        {" "}
                        The 90s with Dj Neptune
                      </h3>
                      <div className="grid  grid-cols-2 md:grid-cols-2 gap-2">
                        <p className="flex items-center gap-x-1">
                          <Wallet size={24} color="#FFFFFF" fill="#0E8BFF" />
                          <span className="text-base font-bold text-secondary">
                            {item.isdate}
                          </span>
                        </p>
                        <p className="flex items-center gap-x-1">
                          <Clock size={24} color="#FFFFFF" fill="#0E8BFF" />
                          <span className="text-base font-bold text-secondary">
                            {item.istime}
                          </span>
                        </p>
                        <p className="flex items-center gap-x-1">
                          <MapPin size={24} color="#FFFFFF" fill="#0E8BFF" />
                          <span className="text-base font-bold text-secondary">
                            {item.location}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col col-span-2 md:col-span-1  gap-4 items-center ">
                      <div className="flex items-center gap-0 bg-[#E4E7EC] px-[4px] py-[3px]">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "DECREMENT_QUANTITY",
                              payload: item.id,
                            })
                          }
                          className="text-lg font-extrabold text-secondary bg-white/30 px-2  rounded-md"
                        >
                          -
                        </button>
                        <span className="text-secondary px-3 text-base font-bold">
                          {" "}
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => {
                            dispatch({
                              type: "INCREMENT_QUANTITY",
                              payload: item.id,
                            });
                          }}
                          className="text-lg font-extrabold text-secondary  bg-white/30 px-2  rounded-md"
                        >
                          +
                        </button>
                      </div>
                      <h4 className="text-base flex   text-secondary font-bold">
                        Amount : ₦ {item.price * item.quantity}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" p-2  md:ps-4">
                <div className="divide-y-2">
                  <div className="py-2">
                    <div className="flex  gap-x-2 ">
                      <Check
                        size={28}
                        color="#FFFFFF"
                        className="p-1 rounded-full bg-primary  "
                      />
                      <h3 className="text-lg font-bold pb-2">
                        Account information
                      </h3>
                    </div>
                    <div className="ms-10">
                      <p className="text-base font-normal text-secondary">
                        Tunde Chukwu
                      </p>
                      <p className="text-base font-normal text-secondary">
                        tundechukwu12@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="flex  gap-x-2 ">
                      <Check
                        size={28}
                        color="#FFFFFF"
                        className="p-1 rounded-full bg-primary  "
                      />
                      <h3 className="text-lg font-bold pb-2">Phone number</h3>
                    </div>
                    <div className="ms-10">
                      <p className="text-base font-normal text-secondary">
                        +2341123465799
                      </p>
                      <p className="text-base font-normal text-secondary">
                        tundechukwu12@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="py-2">
                    <div
                      className="flex  gap-x-2 cursor-pointer "
                      onClick={() => setCardopen((prv) => !prv)}
                    >
                      <Check
                        size={26}
                        color="#FFFFFF"
                        className="p-1 rounded-full bg-primary  "
                      />
                      <h3 className="text-lg font-bold pb-2">Payment Card</h3>
                      <ChevronUp
                        className={`${
                          isCardOpen ? "rotate-180" : "rotate-0"
                        }  transition-all duration-250 ease-linear`}
                      />
                    </div>

                    {isCardOpen && (
                      <div className="ms-2">
                        <form>
                          <h2 className="text-2xl font-extrabold text-secondary">
                            Payment Details
                          </h2>
                          <div className="grid gap-4 mt-8">
                            <div>
                              <label className="block text-base font-semibold text-secondary mb-2">
                                Card Holder Name
                              </label>
                              <input
                                type="text"
                                placeholder="John Doe"
                                required
                                className="px-4 py-3 bg-transparent text-secondary w-full text-sm border border-secondary/15 shadow-custom-1 rounded-md focus:border-primary focus:valid:border-green-400 valid:border-green-400 outline-none"
                              />
                            </div>

                            <div>
                              <label className="block text-base font-semibold text-secondary mb-2">
                                Card Number
                              </label>
                              <div className="flex bg-transparent border border-secondary/15 shadow-custom-1 rounded-md focus:border-primary focus:valid:border-green-400 valid:border-green-400 overflow-hidden">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 ml-3"
                                  viewBox="0 0 32 20"
                                >
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="10"
                                    fill="#f93232"
                                    data-original="#f93232"
                                  />
                                  <path
                                    fill="#fed049"
                                    d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                    className="hovered-path"
                                    data-original="#fed049"
                                  />
                                </svg>
                                <input
                                  type="number"
                                  required
                                  placeholder="xxxx xxxx xxxx"
                                  className="px-4 py-3 bg-transparent f text-secondary w-full text-sm outline-none"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-base font-semibold text-secondary mb-2">
                                  Expiry Date
                                </label>
                                <input
                                  type="number"
                                  placeholder="08/27"
                                  required
                                  className="px-4 py-3 bg-transparent text-secondary w-full text-sm border border-secondary/15 shadow-custom-1 rounded-md focus:border-primary focus:valid:border-green-400 valid:border-green-400 outline-none"
                                />
                              </div>

                              <div>
                                <label className="block text-base font-semibold text-secondary mb-2">
                                  CVV
                                </label>
                                <input
                                  type="number"
                                  required
                                  placeholder="XXX"
                                  className="px-4 py-3 bg-transparent text-secondary w-full text-sm border border-secondary/15 shadow-custom-1 rounded-md focus:border-primary focus:valid:border-green-400 valid:border-green-400 outline-none"
                                />
                              </div>
                            </div>
                          </div>

                          <ul className="text-secondary text-base font-semibold mt-8 space-y-4">
                            <li className="flex flex-wrap gap-4 text-base">
                              Total price :
                              <span className="ml-auto text-base font-bold">
                                ₦ {totalPrice()}
                              </span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-base">
                              Your Discount(15%) :{" "}
                              <span className="ml-auto text-base font-bold">
                                ₦ {discountPrice()}
                              </span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-base">
                              Price with discount:{" "}
                              <span className="ml-auto text-base font-bold">
                                ₦ {totalpricewithDiscount()}
                              </span>
                            </li>

                            <li className="flex flex-wrap gap-4 text-base">
                              Tax:{" "}
                              <span className="ml-auto text-base font-bold">
                                ₦ {taxPrice()}
                              </span>
                            </li>
                            <hr className="border-secondary/15 shadow-custom-1" />
                            <li className="flex flex-wrap gap-4 text-base font-bold">
                              Grand Total{" "}
                              <span className="ml-auto text-base">
                                ₦ {totalpricewithdiscountandtax()}
                              </span>
                            </li>
                          </ul>

                          <button
                            className="w-full py-2 capitalize font-bold text-base tracking-wider rounded-[3px] mt-4 bg-primary text-white"
                            onClick={() => setModal(true)}
                          >
                            {" "}
                            take order{" "}
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </ContainerTage>

        {/* Modal for Order Details */}
        {isOpenmodal && !isOrderConframe && (
          <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 w-screen h-screen z-30 flex justify-center items-center px-2">
            <div className="bg-white p-6 relative rounded-lg max-w-3xl  w-full h-auto   overflow-y-auto ">
              {/* Close Button (Cross) */}
              <button
                onClick={() => setModal(false)}
                className="absolute top-2 right-2 text-gray-500 text-2xl"
              >
                <X
                  size={30}
                  className="bg-primary text-white rounded-full p-1"
                />
              </button>

              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div id="order-details">
                <div className="max-h-60 overflow-y-auto">
                  <Table aria-label="Example static collection table">
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>IMG</TableColumn>
                      <TableColumn>QUANTITY</TableColumn>
                      <TableColumn>DATE-TIEM</TableColumn>
                      <TableColumn>PRICE</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {cart.map((item) => (
                        <TableRow
                          className="border-b border-secondary/20"
                          key={item.id}
                        >
                          <TableCell className="text-base font-bold text-secondary">
                            {item.name}
                          </TableCell>
                          <TableCell>
                            <img
                              src={item.img}
                              className="w-12 h-12 object-cover"
                              alt=""
                            />
                          </TableCell>
                          <TableCell className="text-base font-medium text-secondary">
                            {item.quantity}
                          </TableCell>
                          <TableCell className="text-base font-medium text-secondary">
                            {item.isdate} <br /> {item.istime}
                          </TableCell>
                          <TableCell className="text-base font-medium text-secondary">
                            {item.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <ul className="text-secondary font-semibold mt-8 space-y-4">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Total price :
                    <span className="ml-auto font-bold">₦ {totalPrice()}</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Your Discount(15%) :{" "}
                    <span className="ml-auto font-bold">
                      ₦ {discountPrice()}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Price with discount:{" "}
                    <span className="ml-auto font-bold">
                      ₦ {totalpricewithDiscount()}
                    </span>
                  </li>

                  <li className="flex flex-wrap gap-4 text-sm">
                    Tax:{" "}
                    <span className="ml-auto font-bold">₦ {taxPrice()}</span>
                  </li>
                  <hr className="border-secondary/15 shadow-custom-1" />
                  <li className="flex flex-wrap gap-4 text-sm font-bold">
                    Grand Total{" "}
                    <span className="ml-auto">
                      ₦ {totalpricewithdiscountandtax()}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleConfirmOrder}
                  className="px-4 py-2 bg-primary text-white rounded"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}

        {isOrderConframe && (
          <>
            <div className="fixed inset-0 h-screen w-screen z-10  left-0 right-0 top-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
              <div className="bg-white p-6 rounded-lg w-96 relative">
                <h2 className="text-xl font-bold text-secondary mb-4">
                  Order Confirmed
                </h2>
                <p className="text-lg font-semibold text-green-600">
                  Your order has been confirmed successfully!
                </p>

                {/* Buttons (Download and Close) */}
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handleDownloadPDF} // Function to download PDF
                    className="px-4 py-2 bg-primary text-base font-bold text-white rounded"
                  >
                    Download PDF
                  </button>
                  <button
                    onClick={handleCloseOrderConfirm} // Close and reset the modal
                    className="p-1 bg-primary absolute top-2 right-2 text-white rounded-full"
                  >
                    <X size={25} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CardPage;
