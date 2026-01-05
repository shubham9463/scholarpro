import React, { useState } from "react";

export default function Cart({ cartItems = [], onRemoveItem, onClearCart }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => setShowPaymentModal(true);

  const confirmPayment = () => {
    setShowPaymentModal(false);
    alert(`Payment of ₹${totalAmount} completed successfully!`);
  };

  const handleClearCart = () => setShowClearModal(true);

  const confirmClearCart = () => {
    onClearCart();
    setShowClearModal(false);
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Segoe UI, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No subjects added yet.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px", marginBottom: "20px" }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f3f4f6",
                  paddingBottom: "8px",
                }}
              >
                <span>
                  <b>{item.name}</b> — ₹{item.price}
                </span>
                <button
                  onClick={() => onRemoveItem(item)}
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "10px",
              flexWrap: "wrap",
            }}
          >
            <h4>Total: ₹{totalAmount}</h4>
            <button
              onClick={handleClearCart}
              style={{
                background: "#f97316",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Clear Cart
            </button>
          </div>

          <button
            onClick={handlePayment}
            style={{
              marginTop: "20px",
              background: "#10b981",
              color: "#fff",
              border: "none",
              padding: "12px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "500",
              width: "100%",
            }}
          >
            Proceed to Payment 💳
          </button>

          {/* Payment Modal */}
          {showPaymentModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  textAlign: "center",
                  maxWidth: "400px",
                  width: "90%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                <h3>Payment Gateway</h3>
                <p>Your total amount is ₹{totalAmount}</p>
                <p>Do you want to proceed with the payment?</p>
                <div style={{ marginTop: "20px" }}>
                  <button
                    onClick={confirmPayment}
                    style={{
                      background: "#10b981",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Pay
                  </button>
                  <button
                    onClick={() => setShowPaymentModal(false)}
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Clear Cart Confirmation Modal */}
          {showClearModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  textAlign: "center",
                  maxWidth: "400px",
                  width: "90%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                <h3>Clear Cart</h3>
                <p>Are you sure you want to clear the entire cart?</p>
                <div style={{ marginTop: "20px" }}>
                  <button
                    onClick={confirmClearCart}
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Yes, Clear
                  </button>
                  <button
                    onClick={() => setShowClearModal(false)}
                    style={{
                      background: "#10b981",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
