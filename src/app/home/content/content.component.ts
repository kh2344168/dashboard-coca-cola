import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  factories = [
    {
      name: 'Cairo Factory',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'Sohag Factory',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'USA Factory ',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'Turkey Factory ',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'Brazil Factory ',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'Spain Factory ',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'Turkey Factory ',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
    {
      name: 'Spain Factory ',
      actualSpeed: 5000,
      actualProduction: 20000,
      lastCycleTime: 20,
      ratioActiveLines: '5:2',
      cycleItems: [
        { progress: 78, color: '#CA4E82', label: 'OEE' },
        { progress: 60, color: '#00D1DE', label: 'SLE' },
        { progress: 70, color: '#FF9F1C', label: 'USLE' },
      ],
    },
  ];
}
