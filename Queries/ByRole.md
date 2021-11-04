> getByRole, queryByRole, getAllByRole, queryAllByRole, findByRole, findAllByRole

```javascript
getByRole(
  // If you're using `screen`, then skip the container argument:
  container: HTMLElement,
  role: TextMatch,
  options?: {
    exact?: boolean = true,
    hidden?: boolean = false,
    name?: TextMatch,
    normalizer?: NormalizerFn,
    selected?: boolean,
    checked?: boolean,
    pressed?: boolean,
    current?: boolean | string,
    expanded?: boolean,
    queryFallbacks?: boolean,
    level?: number,
  }): HTMLElement
  ```
