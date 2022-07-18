import CategoryIcon from "@mui/icons-material/Category";
import GroundTruth from "../../nonview/core/GroundTruth"
import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import VersionView from "../../view/molecules/VersionView"
import Stack from '@mui/material/Stack';
export default class VersionsPage extends AbstractInnerPage {
  get page() {
    return "VersionsPage";
  }
  get Icon() {
    return CategoryIcon;
  }

  get label() {
    return "Versions";
  }

  get color() {
    return AppColors.Version;
  }

  render() {
    const {onChangeVersion, context} = this.props;
    const versions = GroundTruth.getVersions();
    return (
      <Stack gap={1}>
      {
        versions.map(
          function(version) {
            const key = 'version-' + version;
            return <VersionView key={key} version={version} activeVersion={context.version} onChangeVersion={onChangeVersion} />;
          }
        )
      }
      </Stack>
    )
  }
}
