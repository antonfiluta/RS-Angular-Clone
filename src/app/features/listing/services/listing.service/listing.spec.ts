import { TestBed } from '@angular/core/testing';
import { ListingService } from './listing.service';
import { Apartment } from '../../../../shared/utils/apartments.models';

describe('ListingService', () => {
  let service: ListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially return an empty list of apartments', (done) => {
    service.getApartments().subscribe((apartments) => {
      expect(apartments).toEqual([]);
      done();
    });
  });

  it('should create a new apartment', (done) => {
    const newApartment: Partial<Apartment> = {
      hostId: 'user1',
      title: 'Test Apartment',
    };

    service.createApartment(newApartment).subscribe((apt) => {
      expect(apt.id).toBeDefined();
      expect(apt.hostId).toBe('user1');
      expect(apt.title).toBe('Test Apartment');

      service.getApartments().subscribe((apartments) => {
        expect(apartments.length).toBe(1);
        expect(apartments[0].id).toBe(apt.id);
        done();
      });
    });
  });

  it('should update an existing apartment', (done) => {
    const aptPartial: Partial<Apartment> = { title: 'Original' };
    service.createApartment(aptPartial).subscribe((apt) => {
      service.updateApartment(apt.id, { title: 'Updated' }).subscribe((updated) => {
        expect(updated.title).toBe('Updated');

        service.getApartmentById(apt.id).subscribe((fetched) => {
          expect(fetched?.title).toBe('Updated');
          done();
        });
      });
    });
  });

  it('should delete an apartment', (done) => {
    service.createApartment({ title: 'To Delete' }).subscribe((apt) => {
      service.deleteApartment(apt.id).subscribe(() => {
        service.getApartmentById(apt.id).subscribe((fetched) => {
          expect(fetched).toBeUndefined();
          done();
        });
      });
    });
  });
});
