import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.log('Your order has been submitted', customerData);
    this.clearCart();
    this.checkoutForm.reset();
  }
}
