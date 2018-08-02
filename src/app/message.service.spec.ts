import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {

  let array = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('Add Method should be here', inject([MessageService],(service: MessageService)=>{
    
      expect(service.add).toBeTruthy();
  }));
  it('Add Function ', inject([MessageService],(service : MessageService)=>{    
    // let original = ['Manish'];
    // let newArray = ['Manish']
    // let oriJson =  JSON.stringify(array.concat(original));
    // let expJson = JSON.stringify(newArray);
    // expect(service.add('Manish')).toBe()
  }))

  it('Sum Function ', inject([MessageService],(service : MessageService)=>{
    expect(service.Sum(1,2)).toEqual(3);
  }))

});
