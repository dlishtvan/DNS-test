import {getter, Module, mutation, VuexModule} from 'vuex-class-component';
import FeedMillsInterface from '@/types/FeedMillsInterface'

@Module({namespacedPath: 'feedMills/'})
export class FeedMillsStore extends VuexModule {
    @getter feedMillsData: Array<FeedMillsInterface> = [
        {
            id: 1,
            name: 'Feed Mill 1',
            createdAt: new Date(),
            options: [
                {title: 'Canola Meal', name:'canolaMeal'},
                {title: 'Copra Meal', name:'copraMeal'},
                {title: 'Lupins', name:'lupins'},
            ]
        },
        {
            id: 2,
            name: 'Feed Mill 2',
            createdAt: new Date(),
            options: []
        },
        {
            id: 3,
            name: 'Feed Mill 3',
            createdAt: new Date(),
            options: []
        },
        {
            id: 4,
            name: 'Feed Mill 4',
            createdAt: new Date(),
            options: []
        },
        {
            id: 5,
            name: 'Feed Mill 5',
            createdAt: new Date(),
            options: []
        },
        {
            id: 6,
            name: 'Feed Mill 6',
            createdAt: new Date(),
            options: []
        },
    ];

    @mutation addFeedMill(feedMill: FeedMillsInterface) {
        this.feedMillsData.push(feedMill);
    }

    @mutation deleteFeedMill(id: number) {
        const index = this.feedMillsData.findIndex(feedMills => feedMills.id == id);
        this.feedMillsData.splice(index, 1);
    }

    @mutation saveFeedMill(feedMill: FeedMillsInterface) {
        const index = this.feedMillsData.findIndex(feedMills => feedMills.id == feedMill.id);
        this.feedMillsData.splice(index, 1, feedMill);
    }
}
