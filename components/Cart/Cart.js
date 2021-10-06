// import { MongoClient } from "mongodb";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";
import CartButton from "./CartButton";

// export async function getStaticProps(){

//   const client=await MongoClient.connect(
//     "mongodb+srv://sakibulanwar:CNnFPruxhEBayMEt@cart-items.mzohg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
//   const db=client.db()

//   const cartCollectios=db.collection('cartItems')

//   const items= await cartCollectios.find().toArray()
// client.close()

// return{
// props:{

//   items: items.map((item)=>(
// {
//   id:item.id,
//   title:item.title,
//   price:item.price
// }

//   ))

// }
// ,
// revalidate:1

// }

// }

export default function Cart(props) {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Fragment>
      <div className="relative">
        <CartButton />
        <div className="h-0 w-0">
          {showCart && <CartList items={props.items} />}
        </div>
      </div>
    </Fragment>
  );
}
