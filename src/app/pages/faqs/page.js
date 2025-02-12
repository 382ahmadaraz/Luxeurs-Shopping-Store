import PagesComp from "@/app/components/pagesComp/PagesComp"

export default function page() {
    return (
        <div>
            <PagesComp title="FAQs" name="Frequently Asked Question's" />

            <p className="[&>*]:font-bold [&>*]:text-gray-500 text-gray-400 w-[90%] m-auto">
                <span> FAQs</span><br /><br />

                <span>1.</span> Is an account necessary for placing an order<br />
                No, you can place an order as a guest as well.<br /><br />

                <span>2.</span> What if I forget my password?<br />
                In the event of a forgotten password, simply click on ‘Forgot Your Password’ on the sign in page. Enter your Email Address to receive a password reset link. Login using your new password.
                <br /><br />
                <span>3.</span> How can I place an order?<br />
                Once you have added all your desired items to your shopping cart, follow these instructions:<br />
                – Click on the Cart icon and then after checking all your items & total bill click on “proceed to Checkout”<br />
                – Enter all your required billing & shipping detail<br />
                – Choose your desired payment method and after filling the required info click on “Place Order” button and check your email for Order confirmation.
                <br /><br />
                <span>4.</span> Can I Cancel my order?<br />
                Yes, the order can always be cancelled after it is placed. If the order that you want to cancel has not yet been dispatched by us it will be cancelled and complete amount (if paid at the time of checkout) will be refunded into your bank account and if the order has been dispatched to Courier Company before your cancellation then the amount will be refunded after deduction of delivery charges of PKR 199/-
                <br /><br />
                <span>5.</span> How Can I add items or make changes to an existing order?<br />
                For this you have to contact us on our Instagram page or Whatsapp number and tell us your changes along with your unique Order Number. We will convey the changes to our e-commerce full-filament team.
                <br /><br />
                <span>6.</span> Can an order be available for store pickup?<br />
                Yes, if you can visit any of our physical stores you can pickup your order from there but in that case you have to inform us on our instagram page or Whatsapp number.
                <br /><br />
                <span>7.</span> What manner of shipping do you use?<br />
                We use TCS, Call Courier, Leopards and Swyft for local orders and DHL for international orders.<br /><br /><br /><br />

            </p>

        </div>
    )
}
