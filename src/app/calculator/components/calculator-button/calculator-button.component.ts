import { ChangeDetectionStrategy, Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.component.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'    
  },
  // encapsulation: ViewEncapsulation.None
})
export class CalculatorButtonComponent {
  public isCommand = input(false, {
    transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
  });
  
  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }

}