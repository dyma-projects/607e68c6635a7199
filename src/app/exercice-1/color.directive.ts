import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private el: ElementRef<any>) {}

  @HostListener("window: keydown.arrowup", ["$event"]) private UpIn($event) {
    this.el.nativeElement.style.color = "red";
  }

  @HostListener("window: keyup.arrowup", ["$event"]) private UpOut($event) {
    this.el.nativeElement.style.color = "black";
  }

  @HostListener("window: keydown.arrowdown", ["$event"]) private DownIn(
    $event
  ) {
    this.el.nativeElement.style.color = "blue";
  }

  @HostListener("window: keyup.arrowdown", ["$event"]) private DownOut($event) {
    this.el.nativeElement.style.color = "black";
  }

  @HostListener("window: keydown.arrowright", ["$event"]) private RightIn() {
    this.el.nativeElement.style.color = "purple";
  }

  @HostListener("window: keyup.arrowright", ["$event"]) private RightOut() {
    this.el.nativeElement.style.color = "black";
  }

  @HostListener("window: keydown.arrowleft", ["$event"]) private LeftIn() {
    this.el.nativeElement.style.color = "orange";
  }
  @HostListener("window: keyup.arrowleft", ["$event"]) private LeftOut() {
    this.el.nativeElement.style.color = "black";
  }
}
