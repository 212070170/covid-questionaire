import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes?: Styles;
  item: string;
  parentState: any;
  parentOnStateChange: any;
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 34,
      height: 22,
      padding: 0,
      display: 'flex'
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark
        }
      }
    },
    thumb: {
      width: 18,
      height: 18,
      boxShadow: 'none'
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  })
)(Switch);

export const IOsSwitch = ({ ...props }: Props) => {
  const [state, setState] = React.useState({
    checkedC: true
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.parentOnStateChange({ ...props.parentState, [props.item]: event.target.checked });
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item className="yesno">
          No
        </Grid>
        <Grid item>
          <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
        </Grid>
        <Grid item className="yesno">
          Yes
        </Grid>
      </Grid>
    </Typography>
  );
};