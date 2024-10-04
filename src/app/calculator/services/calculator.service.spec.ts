import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatorService);
    });

    beforeAll(() => {});
    afterEach(() => {});
    afterAll(() => {});

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be created with default values', () => {
        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');
    });

    it('should set resultText, subResultText to "0" when C is pressed', () => {
        service.resultText.set('123');
        service.subResultText.set('456'),
        service.lastOperator.set('*');

        service.constructNumber('C');

        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');
    });
});