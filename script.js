const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button-increase");
const decreaseButtonEl = document.querySelector(".counter__button-decrease");
const resetButEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTtile = document.querySelector(".counter__title");

resetButEl.addEventListener("click", () => {
  counterEl.classList.remove("counter--limit");
  counterValueEl.textContent = 0;
  counterTtile.innerHTML = "fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  this.blur();
});

const incrementCounter = () => {
  const currentValue = counterValueEl.textContent;

  const currentValueAsNumber = +currentValue;

  const newValue = currentValueAsNumber + 1;

  if (newValue > 5) {
    counterEl.classList.add("counter--limit");
    counterTtile.innerHTML = "limit! Buy <b>Pro</b> for > 5";
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  } else {
    counterValueEl.textContent = newValue;
  }

  this.blur();
};
const dicrementCounter = () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;

  if (currentValue > 0) {
    const newValue = currentValueAsNumber - 1;
    counterValueEl.textContent = newValue;
  }

  this.blur();
};

decreaseButtonEl.addEventListener("click", dicrementCounter);
increaseButtonEl.addEventListener("click", incrementCounter);

document.addEventListener("keydown", incrementCounter);
