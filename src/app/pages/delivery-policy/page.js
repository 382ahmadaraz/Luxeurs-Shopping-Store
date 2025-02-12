import PagesComp from "@/app/components/pagesComp/PagesComp"

export default function page() {
    return (
        <div>
            <PagesComp title="Delivery policy" name="Delivery policy" />

            <p className="[&>*]:font-bold [&>*]:text-gray-500 text-gray-400 w-[90%] m-auto">
                <span> Delivery charges:<br /><br />
                    Within Pakistan:</span><br />
                If order amount is below 2200 then Delivery Charges are Rs. 199/-<br />
                If order amount is PKR 2200 or above then delivery is free.<br /><br />
                <span> United Arab Emirates:</span><br />
                Delivery Charges = Rs. 2000/- for first item and Rs. 500/- for every next item added to your cart.<br />
                For delivery in other countries kindly Whatsapp us your order on +923333213119 and we will calculate the <br />delivery charges for you.<br /><br />
                <span> Time Period:</span><br />
                Delivery in Karachi takes 1-3 days while in other cities of Pakistan it can take 2-6 days normally. The <br />delivery driver/ rider will call you on the contact number you provide for the delivery address if they have <br />any issues with delivery. International orders are normally delivered in 3-10 days.<br />
            </p><br /><br /><br />
        </div>
    )
}
