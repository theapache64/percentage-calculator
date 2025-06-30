import { Form, ActionPanel, Action, showToast, Toast, Clipboard } from "@raycast/api";
import { useState } from "react";

interface FormValues {
  value1: string;
  value2: string;
}

export default function PercentageCalculator() {
  const [calculation, setCalculation] = useState<string>("");

  const calculateBasicPercentage = (percent: number, value: number): number => {
    return (percent / 100) * value;
  };

  const calculatePercentageOf = (part: number, whole: number): number => {
    return (part / whole) * 100;
  };

  const calculatePercentageDifference = (value1: number, value2: number): number => {
    return Math.abs((value1 - value2) / ((value1 + value2) / 2)) * 100;
  };

  const calculatePercentageChange = (oldValue: number, newValue: number): number => {
    return ((newValue - oldValue) / oldValue) * 100;
  };

  const handleSubmit = (values: FormValues) => {
    try {
      const value1 = parseFloat(values.value1);
      const value2 = parseFloat(values.value2);

      if (isNaN(value1) || isNaN(value2)) {
        throw new Error("Invalid numbers");
      }

      const stats = [];

      stats.push(`• ${value1}% of ${value2} = ${calculateBasicPercentage(value1, value2).toFixed(2)}`);
      stats.push(`• ${value2}% of ${value1} = ${calculateBasicPercentage(value2, value1).toFixed(2)}`);
      stats.push(`• ${value1} is ${calculatePercentageOf(value1, value2).toFixed(2)}% of ${value2}`);
      stats.push(`• ${value2} is ${calculatePercentageOf(value2, value1).toFixed(2)}% of ${value1}`);
      stats.push(`• Percentage difference: ${calculatePercentageDifference(value1, value2).toFixed(2)}%`);

      const change1to2 = calculatePercentageChange(value1, value2);
      const change2to1 = calculatePercentageChange(value2, value1);
      const direction1to2 = change1to2 >= 0 ? "increase" : "decrease";
      const direction2to1 = change2to1 >= 0 ? "increase" : "decrease";

      stats.push(`• From ${value1} to ${value2}: ${Math.abs(change1to2).toFixed(2)}% ${direction1to2}`);
      stats.push(`• From ${value2} to ${value1}: ${Math.abs(change2to1).toFixed(2)}% ${direction2to1}`);

      const calculationString = stats.join("\n");

      setCalculation(calculationString);

      showToast({
        style: Toast.Style.Success,
        title: "Calculated",
        message: "Full stats calculated",
      });
    } catch (error) {
      showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: "Please enter valid numbers",
      });
    }
  };

  const copyToClipboard = async (text: string) => {
    await Clipboard.copy(text);
    showToast({
      style: Toast.Style.Success,
      title: "Copied to Clipboard",
      message: text,
    });
  };

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Calculate" onSubmit={handleSubmit} />
          {calculation && <Action title="Copy Full Calculation" onAction={() => copyToClipboard(calculation)} />}
        </ActionPanel>
      }
    >
      <Form.Description
        title="Full Statistics Calculator"
        text="Enter two values to get a full breakdown of percentage calculations."
      />
      <Form.Separator />

      <Form.TextField
        id="value1"
        title="Value 1"
        placeholder="Enter first value"
        info="The first value for comprehensive calculations"
      />

      <Form.TextField
        id="value2"
        title="Value 2"
        placeholder="Enter second value"
        info="The second value for comprehensive calculations"
      />

      {calculation && (
        <>
          <Form.Separator />
          <Form.Description title="Full Statistics" text={calculation} />
        </>
      )}
    </Form>
  );
}
