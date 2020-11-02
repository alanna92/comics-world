import {
    Component,
    Output,
    EventEmitter,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-search-input',
    templateUrl: 'search-input.component.html',
    styleUrls: ['search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
    searchText = new FormControl();

    searchSubscription: Subscription;

    @Output()
    textChange = new EventEmitter<string>();

    ngOnInit(): void {
        this.searchSubscription = this.searchText.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe((response) => this.textChange.emit(response));
    }

    ngOnDestroy(): void {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }
}
