<template>
  <div class="feed-mill">
    <b-row>
      <b-col>
        <p class="name">
          {{feedMill.name}}
        </p>
        <p class="date">
          <small>
            Created Date: {{feedMill.createdAt | monthDate}}
          </small>
        </p>
      </b-col>
      <b-col class="d-flex justify-content-between align-items-center">
        <b-button
            pill
            variant="outline-primary"
            class="edit"
            @click="onEdit"
        >
          Edit
        </b-button>
        <b-form-checkbox class="checkbox">

        </b-form-checkbox>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator';
import FeedMillsInterface from "@/types/FeedMillsInterface";

@Component({
  filters: {
    monthDate(val) {
      return val.toLocaleDateString('en-US', {month: 'short', day: '2-digit'})
    }
  }
})

export default class FeedMill extends Vue {
  @Prop() private feedMill!: FeedMillsInterface;

  @Emit('edit')
  onEdit(): string {
    return this.feedMill
  }
}
</script>


<style lang="sass" scoped>
  $baseBlue: #0070BA

  .feed-mill
    background: #fff
    border-radius: 10px
    border: 1px solid $baseBlue
    margin: 10px 0
    padding: 24px 28px
    box-sizing: border-box

    .name,
    .date
      margin-bottom: 0
      line-height: 1

    .name
      font-weight: 600
      font-size: 18px
      color: $baseBlue
      margin-bottom: 14px

    .date
      color: #808080
      font-size: 14px

    .edit
      font-size: 14px
      line-height: 1
      padding: 10px 28px

    .checkbox
      &::v-deep
        .custom-control-input:checked ~ .custom-control-label::before
          background: #45AC34

        .custom-control-label::before
          border-color: #45AC34

</style>
