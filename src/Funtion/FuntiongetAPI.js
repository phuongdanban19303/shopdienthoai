export const fetchlist = async () => {
    try {
      const repct = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await repct.json();
      return data; // Trả về dữ liệu
    } catch (error) {
      console.error(error);
      return null; // Nếu lỗi, trả về null
    }
  };
  