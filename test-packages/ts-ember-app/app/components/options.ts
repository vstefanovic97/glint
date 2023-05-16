/* eslint-disable ember/no-classic-components, ember/require-tagless-components */
import Component from "@glimmer/component";

interface OptionsComponentSignature<T> {
    Args: {
        options: T[];
    }
    Blocks: {
        default: [options: T]
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Options: typeof OptionsComponent;
        options: typeof OptionsComponent;
    }
  }

export default class OptionsComponent<T> extends Component<OptionsComponentSignature<T>> {} // eslint-disable-line ember/no-empty-glimmer-component-classes