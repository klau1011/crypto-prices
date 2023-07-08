import { render } from "@testing-library/react";
import Coin from "../components/Coin";

describe("Coin Card", () => {
  it("rendered fields with correct values", () => {
    const { getByTestId } = render(
      <Coin
        name="test-name"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAZlBMVEX///8dHRsAAADv7+8bGxn5+fkGBgC1tbV4eHkWFhR/f38qKioZGReqqqq+vr729vYREQ5ycnLR0dGioqHj4+NgYF88PDwkJCNlZWXa2tqampmSkpFISEhOTk5bW1qLi4sxMS/Hx8jRUyP0AAACoElEQVR4nO3Y3XaqMBAFYAgQAUHCjyCIVN//JQsJVDQT8Kwe6M3+blpXx7DNSBJqWQAAAAAAAAAAAAAAAAAAAAAAAAAA8DuOJtFqPL3IMY2XFKe8yR+FPorhcsvDWVemibWig17E6ABF045/v8XURZMjMVSvM+XLmfuODGi/Fdl0wFPJhK0I1tZEwFJoF+wHOxvmu58/W0MH1KqoIb9YMCsR7EAFJK54NsSzYiLfLwJOZW7kyp+Bq3WZCmiev4YxPlAfW3DFGDDgM0TAopQDcV4dKzWV7KIFvLNxAHu6qDlfffEVObC4hepV+qADRqU/k3paleoHuxyyIrvehzHdKnur8caL+KGa63Poh6Z8VuIpSchUZ8fXeqUMyH1vTq/yZdVZ/aUOIvKG+3n7MRqacrKIgTRTQCMVMFwexbsNbWPT/DfyPVdj+RTwA97/CWh1Q0DRjjeGkw2KXQN6fT9ke6gGj3NmC9GdiM1oh4BBGz5RVVkgVxeXM35uTubNa6uAdjDbmsiycFouXcFE6Zvbu1HAp8im69LZTtJ/nHQp4p8EtA4RE+5zi7i/L4PbBgz4SosHcdefV34ODEfivLBZwJedZGG47PDVThmZeWnaZB1c2kfGTUL+5jhxy1z5XTB+DfdfqB3Z+2pKNO7Mxh7vHzBRiaYzoNcNXWbG22SDgGuHhQufz5kjz0hsxxavHrfUvR5VTe1ZSZbK3afaMeDqgdWRTbUjdizbsuK738WvqCN/PW4kbhCoQ39k77kOrgfs616eOALiqelvA1p1x/hU0T936g8PrwHdDwOmcgXLlwJ++uCexJep4JYvnrhU0cIUz0c1/Mfj+RH+4X8VnpPFTZM/1g6tapRPnkgAAAAAAAAAAAAAAAAAAAAAAAAAAGDFN9agI+pUDvOmAAAAAElFTkSuQmCC"
        price={20}
        symbol="BTC"
      />
    );

    const nameField = getByTestId("testid-name");
    expect(nameField).toBeTruthy();
    expect(nameField.textContent).toEqual("test-name");

    const icon = getByTestId("testid-icon");
    expect(icon).toBeTruthy();
    expect(icon.src).toEqual(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAZlBMVEX///8dHRsAAADv7+8bGxn5+fkGBgC1tbV4eHkWFhR/f38qKioZGReqqqq+vr729vYREQ5ycnLR0dGioqHj4+NgYF88PDwkJCNlZWXa2tqampmSkpFISEhOTk5bW1qLi4sxMS/Hx8jRUyP0AAACoElEQVR4nO3Y3XaqMBAFYAgQAUHCjyCIVN//JQsJVDQT8Kwe6M3+blpXx7DNSBJqWQAAAAAAAAAAAAAAAAAAAAAAAAAA8DuOJtFqPL3IMY2XFKe8yR+FPorhcsvDWVemibWig17E6ABF045/v8XURZMjMVSvM+XLmfuODGi/Fdl0wFPJhK0I1tZEwFJoF+wHOxvmu58/W0MH1KqoIb9YMCsR7EAFJK54NsSzYiLfLwJOZW7kyp+Bq3WZCmiev4YxPlAfW3DFGDDgM0TAopQDcV4dKzWV7KIFvLNxAHu6qDlfffEVObC4hepV+qADRqU/k3paleoHuxyyIrvehzHdKnur8caL+KGa63Poh6Z8VuIpSchUZ8fXeqUMyH1vTq/yZdVZ/aUOIvKG+3n7MRqacrKIgTRTQCMVMFwexbsNbWPT/DfyPVdj+RTwA97/CWh1Q0DRjjeGkw2KXQN6fT9ke6gGj3NmC9GdiM1oh4BBGz5RVVkgVxeXM35uTubNa6uAdjDbmsiycFouXcFE6Zvbu1HAp8im69LZTtJ/nHQp4p8EtA4RE+5zi7i/L4PbBgz4SosHcdefV34ODEfivLBZwJedZGG47PDVThmZeWnaZB1c2kfGTUL+5jhxy1z5XTB+DfdfqB3Z+2pKNO7Mxh7vHzBRiaYzoNcNXWbG22SDgGuHhQufz5kjz0hsxxavHrfUvR5VTe1ZSZbK3afaMeDqgdWRTbUjdizbsuK738WvqCN/PW4kbhCoQ39k77kOrgfs616eOALiqelvA1p1x/hU0T936g8PrwHdDwOmcgXLlwJ++uCexJep4JYvnrhU0cIUz0c1/Mfj+RH+4X8VnpPFTZM/1g6tapRPnkgAAAAAAAAAAAAAAAAAAAAAAAAAAGDFN9agI+pUDvOmAAAAAElFTkSuQmCC"
    );

    const price = getByTestId("testid-price");
    expect(price).toBeTruthy();
    expect(price.textContent).toEqual("$ 20.00");

    const symbol = getByTestId("testid-symbol");
    expect(symbol).toBeTruthy();
    expect(symbol.textContent.trim()).toEqual("BTC");
  });
});
