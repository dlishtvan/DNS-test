import {action, getter, Module, mutation, VuexModule} from 'vuex-class-component';
import FeedMillsInterface from '@/types/FeedMillsInterface'

@Module({namespacedPath: 'feedMills/'})
export class FeedMillsStore extends VuexModule {
    @getter feedMillsData: Array<FeedMillsInterface> = [
        {
            id: 1,
            name: 'Feed Mill1',
            createdAt: new Date(),
            options: [
                {title: 'Canola Meal', name:'canolaMeal'},
                {title: 'Copra Meal', name:'copraMeal'},
                {title: 'Lupins', name:'lupins'},
            ]
        },
        {
            id: 2,
            name: 'Feed Mill2',
            createdAt: new Date(),
            options: []
        },
        {
            id: 3,
            name: 'Feed Mill3',
            createdAt: new Date(),
            options: []
        },
        {
            id: 4,
            name: 'Feed Mill4',
            createdAt: new Date(),
            options: []
        },
        {
            id: 5,
            name: 'Feed Mill5',
            createdAt: new Date(),
            options: []
        },
        {
            id: 6,
            name: 'Feed Mill6',
            createdAt: new Date(),
            options: []
        },
        {
            id: 7,
            name: 'Feed Mill7',
            createdAt: new Date(),
            options: []
        },
        {
            id: 8,
            name: 'Feed Mill8',
            createdAt: new Date(),
            options: []
        },
        {
            id: 9,
            name: 'Feed Mill8',
            createdAt: new Date(),
            options: []
        },
        {
            id: 10,
            name: 'Feed Mill8',
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


}
