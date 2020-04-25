import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }: Theme) => ({
  root: {
    flexGrow: 1,
  },
  blogContent: {
    marginTop: spacing(3),
    padding: spacing(6),
    background: palette.background.paper,
    paddingBlockStart: spacing(10),
    [breakpoints.down('md')]: {
      padding: spacing(2),
      marginTop: 0,
    },
  },
}));

export default useStyles;